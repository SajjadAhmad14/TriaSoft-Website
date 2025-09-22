"use client";

import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

export default function CloudDistortion() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const app = new PIXI.Application({
      resizeTo: containerRef.current,
      backgroundAlpha: 0,
      resolution: window.devicePixelRatio || 1,
    });

    containerRef.current.appendChild(app.view);

    const cloudTexture = PIXI.Texture.from(
      "https://i.ibb.co/mNS6mZL/clouds.jpg"
    );
    const cloudSprite = new PIXI.Sprite(cloudTexture);
    cloudSprite.width = app.screen.width;
    cloudSprite.height = app.screen.height;
    app.stage.addChild(cloudSprite);

    const displacementTexture = PIXI.Texture.from(
      "https://i.ibb.co/mNS6mZL/clouds.jpg"
    );
    const displacementSprite = new PIXI.Sprite(displacementTexture);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementSprite.width = app.screen.width;
    displacementSprite.height = app.screen.height;
    app.stage.addChild(displacementSprite);

    const displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementSprite
    );
    cloudSprite.filters = [displacementFilter];
    displacementFilter.scale.set(0);

    app.ticker.add(() => {
      displacementFilter.scale.x *= 0.9;
      displacementFilter.scale.y *= 0.9;

      displacementSprite.x += 0.3;
      displacementSprite.y += 0.2;

      if (displacementSprite.x > app.screen.width) displacementSprite.x = 0;
      if (displacementSprite.y > app.screen.height) displacementSprite.y = 0;
    });

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      displacementSprite.x = x;
      displacementSprite.y = y;

      displacementFilter.scale.x = 50;
      displacementFilter.scale.y = 50;
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
      app.destroy(true, true);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

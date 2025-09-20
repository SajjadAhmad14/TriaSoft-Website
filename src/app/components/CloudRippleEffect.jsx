import React, { useEffect, useRef } from "react";

function CloudRippleEffect({ parentRef }) {
    const canvasRef = useRef(null);
    const ripples = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            if (parentRef?.current) {
                canvas.width = parentRef.current.offsetWidth;
                canvas.height = parentRef.current.offsetHeight;
            }
        };

        resize();
        window.addEventListener("resize", resize);

        // Track mouse ripples
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ripples.current.push({ x, y, radius: 0 });
        };

        canvas.addEventListener("mousemove", handleMouseMove);

        let time = 0;
        const animate = () => {
            time += 0.01;

            // Draw moving cloud background
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            const data = imageData.data;

            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const value =
                        128 +
                        128 *
                        Math.sin(x * 0.01 + time) *
                        Math.cos(y * 0.01 + time * 0.8);

                    const cell = (x + y * canvas.width) * 4;
                    data[cell] = 20; // R
                    data[cell + 1] = 100 + value * 0.3; // G
                    data[cell + 2] = 160 + value * 0.4; // B
                    data[cell + 3] = 180; // Alpha
                }
            }

            ctx.putImageData(imageData, 0, 0);

            // Draw ripples on top
            ripples.current.forEach((r, i) => {
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - r.radius / 200})`;
                ctx.lineWidth = 2;
                ctx.stroke();

                r.radius += 2;

                if (r.radius > 200) {
                    ripples.current.splice(i, 1);
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, [parentRef]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
}

export default CloudRippleEffect;

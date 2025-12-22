import React from 'react'
import { performanceImages, performanceImgPositions } from "../../constants/index.js";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Performance = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Text animation
    gsap.to('.content p', {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.content p',
        start: 'top 85%',
        end: 'bottom 70%',
        toggleActions: 'play none none reverse',
      }
    });

    // Image timeline matches desktop only
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true,
          anticipatePin: 1
        }
      });

      performanceImgPositions.forEach((pos) => {
        if (pos.id === 'p5') return;

        const target = `.${pos.id}`;
        tl.to(target, {
          left: pos.left !== undefined ? `${pos.left}%` : 'auto',
          right: pos.right !== undefined ? `${pos.right}%` : 'auto',
          bottom: pos.bottom !== undefined ? `${pos.bottom}%` : 'auto',
          transform: pos.transform || 'none',
          duration: 1
        }, 0);
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section id="performance" ref={sectionRef}>
      <h2>
        Next-level graphic performance. Game on.
      </h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img src={src} key={id} alt={id} className={`${id}`} />
        ))}
      </div>

      <div className={"content"}>
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of
          chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images
          faster, so {" "}<span
            className={"text-white"}>{" "} gaming feels more immersive and realistic than ever.</span> And
          Dynamic Caching optimizes fast on-chip memory to dramatically increase GPU utilization-driving a huge
          performance boost for the most demanding pro apps and games
        </p>
      </div>
    </section>
  )
}
export default Performance

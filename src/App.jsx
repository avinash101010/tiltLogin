import { useEffect, useRef } from 'react';
import VanillaTilt from "vanilla-tilt";

export default function App() {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,          // Maximum tilt rotation in degrees.
        speed: 400,       // Speed of the enter/exit transition.
        glare: false,      // Adds a glare effect to the element.
        "max-glare": 0.5, // Maximum opacity of the glare effect.
        perspective: 1000, // Perspective to give the tilt depth.
        //to create parallax effect we use the following code
        //         ///Add transform-style: preserve-3d to your tilt element.
        // Add transform: perspective(1000px); to your tilt element. (1000px is default perspective, but can be changed)
        // Add a transform: translateZ(20px) to your inner elements that have to pop out. lets implement this in our code


        gyroscope: true,  // Boolean to enable/disable device orientation detection.
        gyroscopeMinAngleX: -45, // Minimum gyroscope tilt on the X axis.
        gyroscopeMaxAngleX: 45,  // Maximum gyroscope tilt on the X axis.
        gyroscopeMinAngleY: -45, // Minimum gyroscope tilt on the Y axis.
        gyroscopeMaxAngleY: 45,  // Maximum gyroscope tilt on the Y axis.S

      });
    }

    // Cleanup the VanillaTilt instance when the component unmounts
    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-500 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse z-2"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute -left-20 top-96 animate-pulse"></div>
      <div className="h-25-r w-25-r bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 rounded-full absolute -right-20 top-96 animate-pulse"></div>
      <div
        ref={tiltRef} // Add the ref to the container for VanillaTilt
        className="container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-lg flex justify-center items-center"
      >
        <form className="h-full flex flex-col justify-evenly items-center">
          <div className="font-poppins text-white text-2xl tracking-wider">Login form</div>
          <input type='text' placeholder="username" className="font-poppins text-white bg-transparent focus:outline-none border border-r-0 border-l-0 border-t-0" />
          <input type='password' placeholder="password" className="input-text" />
          <input type="Submit" className='text-black cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 relative z-40' />
        </form>
      </div>
    </div>
  );
}

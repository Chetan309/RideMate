import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Image 
        src="/RideMateBanner.jpg" 
        width={900} 
        height={1000} 
        alt="RideMate Banner"
        className="object-contain w-full h-full"/>
        <div className="absolute top-25 right-0  ">
          <SignIn/>
        </div>
    </div>
  )
}
 
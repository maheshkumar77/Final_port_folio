
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { motion } from "framer-motion";
import EncryptButton from './aniboton'
import GetinPage from "./Getinbutton";
export function GetinTouch() {
  return (
    <BackgroundBeamsWithCollision className="your-custom-class-name">
     <div
          className="flex justify-center items-center"
        >
          <GetinPage/>
        </div>       
    
    </BackgroundBeamsWithCollision>
  );
}


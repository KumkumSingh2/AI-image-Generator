import {   useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { InputBox } from "../Components/InputBox";
import GenerateImageHeading from "../Components/GenerateImageHeading";
import { motion } from "framer-motion";
import GenerateButton from "../Components/GenerateButton";
import ImageContainer from "../Components/ImageContainer";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function GenerateImagePage() {
  const [userPrompt, setUserPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const size = "256x256"
  const generateImage = async () => {
    try {
      setIsLoading(true);
      setImageLoaded(false);

      const imageParameters = {
        prompt: userPrompt,
        n: 1,
        size: size,
      };
      const response = await openai.createImage(imageParameters);
      const urlData = response.data.data[0].url;
      setImageUrl(urlData);

      setIsLoading(false);
      setHasImage(true);
      setIsError(false);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.response.data.error.message);
      } else {
        console.log(error.message);
      }
    }
  };

  const handleImageGeneration = () => {
    setIsError(false);
    generateImage();
  };

  return (
    <main className="App">
      <GenerateImageHeading />

      <ImageContainer
        isError={isError}
        errorMessage={errorMessage}
        isLoading={isLoading}
        hasImage={hasImage}
        imageUrl={imageUrl}
        userPrompt={userPrompt}
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
      />

      <motion.div
        initial={{ opacity: 0.5, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <InputBox label={""} setAttribute={setUserPrompt} />

 
        <GenerateButton
          isLoading={isLoading}
          handleImageGeneration={handleImageGeneration}
        />
      </motion.div>
    </main>
  );
}

export default GenerateImagePage;

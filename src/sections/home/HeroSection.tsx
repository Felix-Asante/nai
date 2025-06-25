import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-primary to-secondary text-neutral-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-6">
        <motion.div
          className="text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="title font-bold">
            Transforming Lives, Promoting Happiness
          </h1>
          <p className="paragraph-large">
            Join us in making a difference in education, health, and
            empowerment.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-200">
              Learn More
            </button>
            <button className="bg-secondary text-white px-6 py-3 rounded hover:bg-secondary-200">
              Donate Now
            </button>
          </div>
        </motion.div>
        <motion.img
          src="/images/img-5.jpg"
          alt="Helping Hands"
          className="w-80 md:w-[40%] lg:w-[30%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}

export const HeroWithVideo = () => (
  <section className="relative h-screen text-neutral-100 overflow-hidden">
    {/* Background Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/videos/vid-1.mov"
      autoPlay
      muted
      loop
      playsInline
    ></video>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-75"></div>

    {/* Content */}
    <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-6">
      <motion.div
        className="text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Transforming Lives, Promoting Happiness
        </h1>
        <p className="text-xl">
          Join us in making a difference in education, health, and empowerment.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-200">
            Learn More
          </button>
          <button className="bg-secondary text-white px-6 py-3 rounded hover:bg-secondary-200">
            Donate Now
          </button>
        </div>
      </motion.div>
      <motion.img
        src="/images/img-5.jpg"
        alt="Helping Hands"
        className="w-80 md:w-[40%] lg:w-[30%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  </section>
);

export const HeroWithImage = () => (
  <section
    className="relative h-screen text-neutral-100 overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/img-6.jpg')",
    }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-75"></div>

    {/* Content */}
    <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-6">
      <motion.div
        className="text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Transforming Lives, Promoting Happiness
        </h1>
        <p className="text-xl">
          Join us in making a difference in education, health, and empowerment.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-200">
            Learn More
          </button>
          <button className="bg-secondary text-white px-6 py-3 rounded hover:bg-secondary-200">
            Donate Now
          </button>
        </div>
      </motion.div>
      <motion.img
        src="/images/img-5.jpg"
        alt="Helping Hands"
        className="w-80 md:w-[40%] lg:w-[30%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  </section>
);

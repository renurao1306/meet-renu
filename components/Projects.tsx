'use client';
import { FeatureCard, FeatureTitle, FeatureDescription, FeatureButton } from './ui/FeatureSection';

function Projects() {
  const features = [
    {
      title: "Exploring AI & ML",
      description:
        "Effortlessly Create Perfect Schedules for schools & colleges with the Power of AI",
      skeleton: <div className="flex justify-center"><img src="/timetable-landscape.jpeg" className="w-[100vh] h-[50vh] border border-white-100 rounded-md" /></div>,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
      showButton: true,
      buttonLabel: "Check it out on GitHub",
      onClickButton: () => {window.open('https://github.com/renurao1306/college-timetabling-app-optapy', '_blank')}
    },
    {
      title: "Capture pictures with AI",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <div className="flex justify-center"><img src="/flower.jpg" className="w-[80vh] h-[40vh] border border-white-100 rounded-md" /></div>,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watch our AI on YouTube",
      description:
        "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
      skeleton: <div className="flex justify-center"><img src="/flower.jpg" className="w-[80vh] border border-white-100 rounded-md" /></div>,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Deploy in seconds",
      description:
        "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
      skeleton: <div className="flex justify-center"><img src="/flower.jpg" className="w-[80vh] border border-white-100 rounded-md" /></div>,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Turning Concepts into Creations
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Built to Inspire: Projects crafted with passion, creativity, and innovation.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
              {feature.showButton && (
                <FeatureButton
                  onClick={() => feature.onClickButton()}
                  label={feature.buttonLabel}
                />
              )}
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
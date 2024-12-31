'use client';
import { FeatureCard, FeatureTitle, FeatureDescription, FeatureButton } from './ui/FeatureSection';

function Projects() {
  const features = [
    {
      title: "Exploring AI & ML",
      description:
        "Effortlessly Create Perfect Schedules for schools & colleges with the Power of AI",
      skeleton: <div className="flex justify-center"><img src="/timetable-landscape.jpeg" className="w-[100vh] h-[70vh] border border-white-100 rounded-md" /></div>,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
      showButton: true,
      buttonLabel: "Check it out on GitHub",
      onClickButton: () => { window.open('https://github.com/renurao1306/college-timetabling-app-optapy', '_blank') }
    },
    {
      title: "Unlock the Magic",
      description:
        "Test your wizarding skills with Quizzly Hallows built using Flutter and Dart programming language",
      skeleton: <div className="flex justify-center"><img src="/quizzly-hallows1.jpg" className="w-[80vh] h-[70vh] border border-white-100 rounded-md" /></div>,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
      showButton: true,
      buttonLabel: "Check it out on GitHub",
      onClickButton: () => { window.open('https://github.com/renurao1306/quizly-hallows.git', '_blank') }
    },
    {
      title: "Turning Data into Discovery",
      description:
        "Visualizing Trends and Unlocking Patterns for Deeper Insights using Python libraries",
      skeleton: <div className="flex justify-center"><img src="/flower.jpg" className="w-[80vh] border border-white-100 rounded-md" /></div>,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
      showButton: true,
      buttonLabel: "Check it out on GitHub",
      onClickButton: () => { window.open('https://github.com/renurao1306/SuicideRates-Data-Analysis.git', '_blank') }
    },
    {
      title: "The Novel Nest",
      description:
        "A Full-Stack Bookstore Experience for Modern Readers",
      skeleton: <div className="flex justify-center"><img src="/flower.jpg" className="w-[80vh] border border-white-100 rounded-md" /></div>,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
      showButton: true,
      buttonLabel: "Check it out on GitHub",
      onClickButton: () => { window.open('https://github.com/renurao1306/TheNovelNest.git', '_blank') }
    },
  ];
  return (
    <div className="relative z-20 py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white-100">
          Turning Concepts into Creations!
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-center font-normal text-neutral-300">
          Built to Inspire: Projects crafted with passion, creativity, and innovation.
        </p>
      </div>

      <div className="relative">
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
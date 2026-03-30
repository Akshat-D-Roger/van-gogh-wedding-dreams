import EventCard from "./EventCard";

const events = [
  {
    name: "Haldi",
    date: "Friday, March 13th 2026",
    time: "1:00 PM Onwards",
    description: "A joyful ritual to bless the couple",
    theme: "yellow"
  },
  {
    name: "Sangeet",
    date: "Friday, March 13th 2026",
    time: "7:00 PM Onwards",
    description: "A night of dance and music with family and friends",
    theme: "black"
  },
  {
    name: "Varmala",
    date: "Saturday, March 14th 2026",
    time: "2:00 PM Onwards",
    description: "The sacred union of two souls",
    theme: "pink"
  },
  {
    name: "Reception",
    date: "Saturday, March 14th 2026",
    time: "8:00 PM",
    description: "A casual dining celebration with family and friends",
    theme: "blue"
  }
] as const;

const EventsSection = () => {
  return (
    <section className="relative z-10 w-full min-h-screen pb-20 bg-background/95 border-t border-white/10 overflow-hidden">
      <div className="relative z-30 flex flex-col">
        {events.map((event, index) => (
          <div
            key={event.name}
            className="min-h-screen w-full flex items-center justify-center"
          >
            <EventCard
              title={event.name}
              date={event.date}
              time={event.time}
              description={event.description}
              delay={0.2} // fixed delay since they appear one by one
              theme={event.theme}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;

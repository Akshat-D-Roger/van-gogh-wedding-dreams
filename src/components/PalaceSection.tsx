import goldenPalace from "@/assets/Fort.png";

const PalaceSection = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={goldenPalace}
        alt="Golden Indian palace"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default PalaceSection;

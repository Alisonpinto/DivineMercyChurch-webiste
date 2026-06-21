const StationCard = ({ title, description, image, prayer, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transform hover:scale-[1.01] transition-transform duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-110" 
          />
        </div>
        <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-2">{title}</h2>
          <h5 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">{description}</h5>
          <div className="space-y-4 text-gray-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationCard;

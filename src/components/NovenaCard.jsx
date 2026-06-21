const NovenaCard = ({ title, subtitle, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 transform hover:-translate-y-1">
      <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 italic whitespace-pre-line">{subtitle}</p>
      <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed text-justify">
        {content}
      </div>
    </div>
  );
};

export default NovenaCard;

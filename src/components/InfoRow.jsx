 const InfoRow = ({ label, children }) => (
    <div className="flex justify-end items-start mb-5">
      {/* محتوى البيانات */}
      <div className="flex-1 leading-relaxed pl-4 order-2">
        {children}
      </div>
      
      {/* العنوان مع النقطتين مضبوطتين */}
      <div className="font-bold text-black min-w-[180px] order-1 flex justify-start">
         <span>{label}</span>
      </div>
    </div>
  );
  
  export default InfoRow
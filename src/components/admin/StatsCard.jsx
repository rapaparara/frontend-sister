const StatsCard = ({
   title,
   value,
   icon,
   iconBg,
   iconColor,
}) => {
   return (
    <div className="card shadow-md bg-base-100 border-base-300 border-2">
    <div className="card-body py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-4 ${iconBg} rounded-full`}>
            <i className={`${icon} ${iconColor} text-2xl`}></i>
          </div>
          <div>
            <div className="stat-title font-semibold text-base">{title}</div>
            <div className="stat-value mt-1 text-3xl font-bold">{value}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   )
}

export default StatsCard

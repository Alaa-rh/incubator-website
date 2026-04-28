// src/components/Forms/StepAvailability.js
import AvailabilityScheduler from "../AvailabilityScheduler"

const StepAvailability = ({ availability, errors, onAvailabilityChange }) => {
  console.log("StepAvailability props:", { availability, errors }); // للتأكد

  return (
    <div>
      <AvailabilityScheduler
        value={availability}
        onChange={onAvailabilityChange}
      />

      {errors?.availability && (
        <p className="text-red-500 text-sm mt-2">{errors.availability}</p>
      )}
    </div>
  )
}

export default StepAvailability
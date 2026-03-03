import AvailabilityScheduler from "../AvailabilityScheduler"

const StepAvailability = ({ form, errors, handleAvailabilityChange }) => {
  return (
    <div>
      <AvailabilityScheduler
        value={form.availability}
        onChange={handleAvailabilityChange}
      />

      {errors.availability && (
        <p className="text-red-500 text-sm mt-2">{errors.availability}</p>
      )}
    </div>
  )
}

export default StepAvailability

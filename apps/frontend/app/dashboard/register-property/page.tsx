import Step1Property from "./Step1Property";
import Step2Owners from "./Step2Owners";
import Step3Review from "./Step3Review";

export default function RegisterPropertyPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-[#1A1A1A]">Register a property</h1>
        <p className="text-sm text-[#1A1A1A]/70">Work through every step before submitting to the official registry.</p>
      </header>
      <div className="space-y-4">
        <Step1Property />
        <Step2Owners />
        <Step3Review />
      </div>
    </div>
  );
}

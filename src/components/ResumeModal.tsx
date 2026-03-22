interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#111827] p-8 rounded-2xl w-full max-w-md space-y-6">

        <h2 className="text-2xl font-bold text-center">
          Request Resume Access
        </h2>

        <form
          action="https://formsubmit.co/Jyothsnagoru28@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600 text-white"
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600 text-white"
          />

          <textarea
            name="message"
            placeholder="Reason for request"
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600 text-white"
          />

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Submit Request
          </button>
        </form>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-sm block mx-auto"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}
export {};
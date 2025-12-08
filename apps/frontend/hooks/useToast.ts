export default function useToast() {
  const show = (message: string) => {
    console.log("Toast", message);
  };

  return { show };
}

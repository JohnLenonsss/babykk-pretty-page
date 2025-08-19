import { Button } from "@/components/ui/button";

const Index = () => {
  const handleRedirect = () => {
    window.open("https://t.me/babykk010", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-babykk flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-7xl md:text-8xl font-bold uppercase bg-gradient-text bg-clip-text text-transparent animate-pulse">
          BabyKK
        </h1>
        
        <div className="flex flex-col gap-4">
          <Button 
            variant="pink" 
            size="lg"
            className="w-48 h-12 text-base font-bold font-poppins uppercase"
            onClick={handleRedirect}
          >
            BUY
          </Button>
          
          <Button 
            variant="purple" 
            size="lg"
            className="w-48 h-12 text-base font-bold font-poppins uppercase"
            onClick={handleRedirect}
          >
            FREE PREVIEWS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
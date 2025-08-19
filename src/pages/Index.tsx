import { Button } from "@/components/ui/button";

const Index = () => {
  const handleRedirect = () => {
    window.open("https://t.me/babykk010", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-babykk flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        {/* Título posicionado mais para cima */}
        <div className="text-center mt-[-10vh]">
          <h1 className="text-7xl md:text-8xl font-bold uppercase bg-gradient-text bg-clip-text text-transparent animate-pulse">
            BabyKK
          </h1>
        </div>
        
        {/* Botões um embaixo do outro */}
        <div className="flex flex-col gap-4 items-center">
          <Button 
            variant="pink" 
            size="lg"
            className="w-48 h-12 text-base font-bold font-poppins uppercase tracking-wide"
            onClick={handleRedirect}
          >
            BUY
          </Button>
          
          <Button 
            variant="purple" 
            size="lg"
            className="w-48 h-12 text-base font-bold font-poppins uppercase tracking-wide"
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
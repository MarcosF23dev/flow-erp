import underConstructionImage from "@/assets/under-construction.jpg";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-2xl w-full text-center space-y-6">
        <img
          src={underConstructionImage}
          alt="Em construção"
          className="w-full rounded-lg shadow-lg"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-primary">
            Página em Desenvolvimento
          </h1>
          <p className="text-lg text-muted-foreground">
            Essa página ainda está em desenvolvimento, desculpe pelos transtornos
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;

import { Title } from "@/design-system/index";

const FirstRowBenefits = () => {
  return (
    <div className="w-full flex flex-col  sm:flex-row py-16 sm:py-24 ">
      <div className="w-full sm:w-[50%]">
        <Title as="h3" size={"sectionSubtitle"}>
          Obten estos beneficios
        </Title>
        <Title className="w-full text-start font-semibold text-3xl mb-4 tracking-tighter max-w-xl md:pr-4">
          Multiplica tu productividad y ahorra tiempo con nuestra solución de
          automatización
        </Title>
        <p className="text-white/80 text-base tracking-tighter mb-4  max-w-xl md:pr-8  ">
          Descubre cómo puedes mejorar la eficiencia y reducir la carga de
          trabajo manual mediante la automatización de tus procesos. Con la
          automatización, podrás:
        </p>
        <ul className="text-white/80 list-disc pl-4 text-base tracking-tighter flex flex-col gap-y-2 max-w-xl md:pr-12">
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Aumenta
            </span>{" "}
            la productividad y eficiencia operativa al eliminar tareas
            repetitivas y tediosas.
          </li>
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Optimiza
            </span>{" "}
            la asignación inteligente de recursos al identificar y eliminar
            ineficiencias en la distribución de tareas.
          </li>
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Minimiza
            </span>{" "}
            errores y evita retrabajos innecesarios al implementar flujos de
            trabajo automatizados y controles de calidad.
          </li>
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Gana
            </span>{" "}
            tiempo para centrarte en tareas estratégicas y de mayor valor que
            impulsen el crecimiento de tu negocio.
          </li>
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Mejora
            </span>{" "}
            la precisión y consistencia de tus procesos al reducir la
            dependencia de acciones manuales propensas a errores.
          </li>
        </ul>
      </div>
      <div className="w-1/2 flex justify-end ">
        <div className="h-full bg-yellow-500 max-w-xl w-full rounded-md shadow-lg" />
      </div>
    </div>
  );
};

export default FirstRowBenefits;

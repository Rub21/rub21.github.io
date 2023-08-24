import {
  CSS,
  HTML,
  ReactL,
  Mapbox,
  Openlayer,
  Leafleat,
  Next,
  Redux,
  NodeJS,
  Express,
  PostgreSQL,
  MongoDB,
  GraphQL,
  JavaScriptL,
  TypeScript,
  Python,
  Java,
  Hapi,
  Github,
  Docker,
  Kubernetes,
  AWS,
  GCP,
  QGis,
  ArcGIS,
  OSM,
} from "../../../../public/assets";

const Skills = [
  {
    name: "Programing languages",
    types: [
      {
        skill_name: "JavaScript",
        src: JavaScriptL,
      },
      {
        skill_name: "Java",
        src: Java,
      },
      {
        skill_name: "Python",
        src: Python,
      },
    ],
  },
  {
    name: "Devops",
    types: [
      {
        skill_name: "Docker",
        src: Docker,
      },
      {
        skill_name: "Kubernetes",
        src: Kubernetes,
      },
      {
        skill_name: "GitHub",
        src: Github,
      },
    ],
  },
  {
    name: "Cloud Plataforms",
    types: [
      {
        skill_name: "Amazon Web Services",
        src: AWS,
      },
      {
        skill_name: "Google Cloud Platform",
        src: GCP,
      },
    ],
  },

  {
    name: "Frontend frameworks",
    types: [
      {
        skill_name: "React",
        src: ReactL,
      },
      {
        skill_name: "HTML5",
        src: HTML,
      },
      {
        skill_name: "CSS3",
        src: CSS,
      },
      {
        skill_name: "Next",
        src: Next,
      },
      {
        skill_name: "MapboxGL",
        src: Mapbox,
      },
      {
        skill_name: "Leaflet",
        src: Leafleat,
      },
      {
        skill_name: "OpenLayer",
        src: Openlayer,
      },
      {
        skill_name: "Redux",
        src: Redux,
      },
    ],
  },
  {
    name: "Databases",
    types: [
      {
        skill_name: "Postgresql",
        src: PostgreSQL,
      },
      {
        skill_name: "MongoDB",
        src: MongoDB,
      },
    ],
  },
  {
    name: "Backend frameworks",
    types: [
      {
        skill_name: "NodeJS",
        src: NodeJS,
      },
      {
        skill_name: "Hapi.js",
        src: Hapi,
      },
      {
        skill_name: "Express",
        src: Express,
      },
    ],
  },

  {
    name: "Data processing",
    types: [
      {
        skill_name: "QGIS",
        src: QGis,
      },
      {
        skill_name: "ArcGIS",
        src: ArcGIS,
      },
      {
        skill_name: "Phyton Scripts",
        src: Python,
      },
      {
        skill_name: "NodeJS",
        src: NodeJS,
      },

      ,
    ],
  },
  {
    name: "Mapping",
    types: [
      {
        skill_name: "OpenStreetMap",
        src: OSM,
      },
    ],
  },
];

export default Skills;

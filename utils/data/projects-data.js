import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: '3-Layered-Security-Authentication-PoC',
        description: "This project hosts a Proof of Concept (PoC) for a 3-layer security architecture implemented in Python. It demonstrates a robust security model with authentication, authorization, and data encryption to ensure maximum protection.",
        tools: ['OpenCV', 'Python', 'Streamlit', 'MediaPipe', "Numpy",],
        code: '',
        demo: '',
        image: ayla,
        role: 'ML Developer',
    },
    {
        id: 2,
        name: 'Intelligent Multi-Agent Automation System',
        description: 'Developed a sophisticated multi-agent system using n8n that orchestrates autonomous AI agents for complex workflow automation. The system employs agentic AI principles to enable self-governing agents that make intelligent decisions, collaborate, and adapt to changing requirements without human intervention.',
        tools: ['n8n', 'LangChain', 'OpenAI', 'Anthropic', 'CrewAI', 'AutoGPT', 'Python', 'JavaScript', 'Multi-Agent Systems', 'Agentic AI', 'LangGraph'],
        role: 'AI Agents Developer',
        code: 'Python, JavaScript',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Jalavishudhakara - Water Hayacinth Remover',
        description: 'I have designed and developed a robot capable of detecting water hyacinth in ponds. The robot utilizes SLAM (Simultaneous Localization and Mapping) for navigation and employs a machine learning model trained with OpenCV for plant identification',
        tools: ['ROS2 Humble', 'URDF', "SLAM", "Esp32", "microROS", "OpenCV", "Linux", 'Git', 'Github', 'Jenkins', 'CI/CD', "Rviz", "Gazebo"],
        role: 'ROS Developer',
        code: 'C++, Python',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'CleanEatz - Ecommerce Webisite',
        description: 'I have designed and developed an e-commerce platform specializing in selling millet-based food products. The platform incorporates robust features for product management, secure payment integration, and an optimized user experience to support seamless transactions.',
        tools: ['Html','CSS', 'Javascript', 'PHP', 'SQL', 'JSON', 'Woocommerce', ],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://cleaneatz.in/',
        image: realEstate,
    },
    {
        id: 5,
        name: 'Agentic AI Chatbot for KITS College',
        description: "Designed and developed an autonomous AI agent chatbot system for KITS College that demonstrates advanced agentic AI capabilities. The system uses multiple AI agents working collaboratively to understand context, make decisions, and provide intelligent responses while learning from interactions to improve performance over time.",
        tools: ['TensorFlow', 'DialogFlow', 'OpenAI', 'LangChain', 'n8n', 'Multi-Agent Systems', 'Python', 'HTML', 'CSS', 'JS', 'NodeJS', 'Git', 'Github',],
        role: 'AI Agents Developer',
        code: '',
        demo: '',
        image: ayla,
    },
   
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
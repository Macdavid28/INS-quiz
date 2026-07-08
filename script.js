// Database of questions extracted directly from the provided source document
const questionDB = 
        [
  {
    "question": "What is the primary purpose of system analysis?",
    "options": [
      "Coding software",
      "Identifying user  requirements",
      "Testing programs",
      "Marketing software"
    ],
    "answer": "Identifying user  requirements",
    "explanation": "System analysis focuses on understanding what the users need the system to do before any design or coding begins."
  },
  {
    "question": "Which technique is commonly used for gathering requirements?",
    "options": [
      "Debugging",
      "Interview",
      "Compilation",
      "Encryption"
    ],
    "answer": "Interview",
    "explanation": "Interviews allow analysts to directly engage with users and stakeholders to ask open-ended questions and gather detailed requirements."
  },
  {
    "question": "A questionnaire is useful when:",
    "options": [
      "Few users exist",
      "Users are geographically dispersed",
      "Coding is complete",
      "Testing begins"
    ],
    "answer": "Users are geographically dispersed",
    "explanation": "Questionnaires are cost-effective and efficient for collecting standardized data from a large number of people spread across different locations."
  },
  {
    "question": "Observation is mainly used to:",
    "options": [
      "Write code",
      "Understand current processes",
      "Design  databases",
      "Install software"
    ],
    "answer": "Understand current processes",
    "explanation": "Observing users in their actual work environment helps analysts see exactly how tasks are currently performed and identify undocumented procedures."
  },
  {
    "question": "A Joint Application Development (JAD) session involves:",
    "options": [
      "Only programmers",
      "Only  managers",
      "Stakeholders working together",
      "Only users"
    ],
    "answer": "Stakeholders working together",
    "explanation": "Joint Application Development (JAD) brings together users, managers, and technical staff in structured workshops to define requirements collaboratively."
  },
  {
    "question": "The first phase of the Waterfall model is:",
    "options": [
      "Design",
      "Testing",
      "Requirement Analysis",
      "Maintenance"
    ],
    "answer": "Requirement Analysis",
    "explanation": "The Waterfall model begins with Requirement Analysis to establish a solid foundation of what the system must do before moving to design."
  },
  {
    "question": "The output of the requirement analysis phase is:",
    "options": [
      "Source code",
      "Requirement specification",
      "Test report",
      "User manual"
    ],
    "answer": "Requirement specification",
    "explanation": "The culmination of the requirement analysis phase is a formal document, such as a Software Requirement Specification (SRS), that details all gathered needs."
  },
  {
    "question": "Which phase follows system design?",
    "options": [
      "Coding",
      "Testing",
      "Maintenance",
      "Deployment"
    ],
    "answer": "Coding",
    "explanation": "Once the system blueprint is finalized during the design phase, developers begin writing the actual software code."
  },
  {
    "question": "The final phase in Waterfall is:",
    "options": [
      "Coding",
      "Design",
      "Maintenance",
      "Analysis"
    ],
    "answer": "Maintenance",
    "explanation": "After deployment, the system enters the maintenance phase where it is updated, patched, and supported over its lifespan."
  },
  {
    "question": "SDLC stands for:",
    "options": [
      "Software Design Life Cycle",
      "System Development Life Cycle",
      "System  Design and Logic Cycle",
      "Software Development Logical Cycle"
    ],
    "answer": "System Development Life Cycle",
    "explanation": "SDLC is the standard industry acronym for the System Development Life Cycle, the overarching process of developing information systems."
  },
  {
    "question": "System analysis focuses on:",
    "options": [
      "What the system should do",
      "How to market software",
      "Hardware repairs",
      "Network installation"
    ],
    "answer": "What the system should do",
    "explanation": "Analysis is concerned with defining the logical requirements (the 'what'), whereas design focuses on the physical implementation (the 'how')."
  },
  {
    "question": "Which requirement describes system behavior?",
    "options": [
      "Functional requirement",
      "Non-functional  requirement",
      "Security policy",
      "Maintenance requirement"
    ],
    "answer": "Functional requirement",
    "explanation": "Functional requirements define specific behaviors, actions, or functions the system must be able to perform."
  },
  {
    "question": "An example of a functional requirement is:",
    "options": [
      "System responds in 2 seconds",
      "System  generates reports",
      "System is secure",
      "System is reliable"
    ],
    "answer": "System  generates reports",
    "explanation": "Generating reports is a specific task or action the system performs, making it a functional requirement."
  },
  {
    "question": "An example of a non-functional requirement is:",
    "options": [
      "Calculate GPA",
      "Print receipt",
      "Response  time less than 3 seconds",
      "Register students"
    ],
    "answer": "Response  time less than 3 seconds",
    "explanation": "Response time dictates how well or how fast the system performs a function (performance criteria), which is a non-functional requirement."
  },
  {
    "question": "Security is classified as:",
    "options": [
      "Functional requirement",
      "Non-functional requirement",
      "User  requirement",
      "Technical requirement"
    ],
    "answer": "Non-functional requirement",
    "explanation": "Security defines a system attribute or quality standard rather than a specific operational behavior, making it a non-functional requirement."
  },
  {
    "question": "The bridge between users and developers is:",
    "options": [
      "Tester",
      "Programmer",
      "Systems Analyst",
      "Network Engineer"
    ],
    "answer": "Systems Analyst",
    "explanation": "Systems Analysts translate business needs from users into technical specifications that programmers can implement."
  },
  {
    "question": "A systems analyst is responsible for:",
    "options": [
      "Hardware manufacturing",
      "Requirement gathering",
      "Marketing",
      "Sales"
    ],
    "answer": "Requirement gathering",
    "explanation": "A core duty of a systems analyst is to communicate with stakeholders to gather, document, and analyze system requirements."
  },
  {
    "question": "Which SDLC phase converts requirements into a blueprint?",
    "options": [
      "Design",
      "Testing",
      "Coding",
      "Maintenance"
    ],
    "answer": "Design",
    "explanation": "The design phase takes the logical requirements and translates them into physical specifications, data models, and architectural blueprints."
  },
  {
    "question": "Which phase verifies that the system works correctly?",
    "options": [
      "Coding",
      "Testing",
      "Design",
      "Analysis"
    ],
    "answer": "Testing",
    "explanation": "The testing phase systematically identifies bugs and verifies that the software meets the specified requirements."
  },
  {
    "question": "Maintenance occurs:",
    "options": [
      "Before testing",
      "After implementation",
      "Before coding",
      "During  analysis"
    ],
    "answer": "After implementation",
    "explanation": "Maintenance is the ongoing process of supporting, fixing, and upgrading the system after it has been deployed to users."
  },
  {
    "question": "One advantage of Waterfall is:",
    "options": [
      "High flexibility",
      "Simple structure",
      "Continuous change",
      "Frequent releases"
    ],
    "answer": "Simple structure",
    "explanation": "Waterfall's linear, sequential nature makes it straightforward to understand, manage, and track against milestones."
  },
  {
    "question": "A disadvantage of Waterfall is:",
    "options": [
      "Difficult to manage",
      "Expensive testing",
      "Limited flexibility",
      "Lack of documentation"
    ],
    "answer": "Limited flexibility",
    "explanation": "Because Waterfall relies on rigid phases, it is difficult and costly to accommodate changing requirements once the project is underway."
  },
  {
    "question": "Agile methodology emphasizes:",
    "options": [
      "Sequential development",
      "Flexibility",
      "No testing",
      "No  user involvement"
    ],
    "answer": "Flexibility",
    "explanation": "Agile is designed to easily adapt to changing requirements through iterative cycles and continuous feedback."
  },
  {
    "question": "User involvement in Agile is:",
    "options": [
      "Low",
      "Medium",
      "Continuous",
      "Absent"
    ],
    "answer": "Continuous",
    "explanation": "Agile relies on constant collaboration and feedback from users throughout every sprint to ensure the product meets their evolving needs."
  },
  {
    "question": "Waterfall is best suited for:",
    "options": [
      "Frequently changing requirements",
      "Stable requirements",
      "Unclear projects",
      "Experimental projects"
    ],
    "answer": "Stable requirements",
    "explanation": "Waterfall works best when the project scope and requirements are completely understood upfront and are unlikely to change."
  },
  {
    "question": "A feasibility study evaluates:",
    "options": [
      "Project viability",
      "Coding standards",
      "User interfaces",
      "Testing tools"
    ],
    "answer": "Project viability",
    "explanation": "A feasibility study assesses whether a proposed project is technically, economically, and operationally practical to undertake."
  },
  {
    "question": "Technical feasibility examines:",
    "options": [
      "Cost",
      "Available technology",
      "User acceptance",
      "Schedule"
    ],
    "answer": "Available technology",
    "explanation": "Technical feasibility assesses whether the organization has the hardware, software, and technical expertise required to build the system."
  },
  {
    "question": "Economic feasibility concerns:",
    "options": [
      "Hardware",
      "Budget and benefits",
      "Security",
      "Time"
    ],
    "answer": "Budget and benefits",
    "explanation": "Economic feasibility (or cost-benefit analysis) determines if the financial benefits of the system outweigh the costs of development."
  },
  {
    "question": "Operational feasibility evaluates:",
    "options": [
      "User acceptance",
      "Database design",
      "Programming  language",
      "Coding style"
    ],
    "answer": "User acceptance",
    "explanation": "Operational feasibility looks at how well the proposed system solves business problems and whether users will adopt it."
  },
  {
    "question": "Schedule feasibility checks:",
    "options": [
      "Cost",
      "Time constraints",
      "Hardware",
      "Security"
    ],
    "answer": "Time constraints",
    "explanation": "Schedule feasibility determines whether the project can be successfully completed within the necessary timeframe."
  },
  {
    "question": "DFD stands for:",
    "options": [
      "Data Flow Diagram",
      "Database Function Diagram",
      "Data File Diagram",
      "Design Flow Diagram"
    ],
    "answer": "Data Flow Diagram",
    "explanation": "DFD is the acronym for Data Flow Diagram, a standard modeling tool in system analysis."
  },
  {
    "question": "DFDs are used to represent:",
    "options": [
      "Program code",
      "Data movement",
      "Hardware design",
      "User  interface"
    ],
    "answer": "Data movement",
    "explanation": "Data Flow Diagrams visually map how data enters, moves through, is processed, and exits an information system."
  },
  {
    "question": "Level 0 DFD is also called:",
    "options": [
      "Detailed DFD",
      "Context Diagram",
      "Process Diagram",
      "Logical  Diagram"
    ],
    "answer": "Context Diagram",
    "explanation": "A Context Diagram (Level 0 DFD) shows the entire system as a single process interacting with external entities."
  },
  {
    "question": "Level 1 DFD provides:",
    "options": [
      "More detailed processes",
      "Coding instructions",
      "User manuals",
      "Test plans"
    ],
    "answer": "More detailed processes",
    "explanation": "A Level 1 DFD breaks down the single process of a Context Diagram into the main sub-processes of the system."
  },
  {
    "question": "Which symbol represents a process in DFD?",
    "options": [
      "Rectangle",
      "Circle",
      "Triangle",
      "Diamond"
    ],
    "answer": "Circle",
    "explanation": "In standard DFD notation (like Yourdon/DeMarco), circles (or rounded rectangles) represent processes that transform data."
  },
  {
    "question": "Logical design focuses on:",
    "options": [
      "Hardware details",
      "Business requirements",
      "Cabling",
      "Devices"
    ],
    "answer": "Business requirements",
    "explanation": "Logical design describes the system's functions and data without specifying the underlying technology or hardware."
  },
  {
    "question": "Physical design focuses on:",
    "options": [
      "Implementation details",
      "User requirements",
      "Policies",
      "Objectives"
    ],
    "answer": "Implementation details",
    "explanation": "Physical design translates the logical model into specific technological solutions, such as database structures and server layouts."
  },
  {
    "question": "ERD stands for:",
    "options": [
      "Entity Relationship Diagram",
      "Electronic Record Diagram",
      "Entity Report  Design",
      "Event Relationship Design"
    ],
    "answer": "Entity Relationship Diagram",
    "explanation": "ERD stands for Entity Relationship Diagram, used primarily in database design."
  },
  {
    "question": "An ERD is used to:",
    "options": [
      "Model database structure",
      "Test software",
      "Create reports",
      "Install  systems"
    ],
    "answer": "Model database structure",
    "explanation": "ERDs visually map out the entities within a system, their attributes, and how they relate to one another in a database."
  },
  {
    "question": "A rectangle in ERD represents:",
    "options": [
      "Relationship",
      "Entity",
      "Attribute",
      "Data flow"
    ],
    "answer": "Entity",
    "explanation": "In standard Chen or Crow's Foot ERD notation, rectangles are used to denote entities (objects or concepts)."
  },
  {
    "question": "An oval in ERD represents:",
    "options": [
      "Process",
      "Relationship",
      "Attribute",
      "Entity"
    ],
    "answer": "Attribute",
    "explanation": "In classic Chen ERD notation, ovals are used to represent the attributes or properties of an entity."
  },
  {
    "question": "Requirement gathering begins with:",
    "options": [
      "Testing",
      "User consultation",
      "Coding",
      "Maintenance"
    ],
    "answer": "User consultation",
    "explanation": "The foundation of requirement gathering is consulting with the end-users and stakeholders to understand their problems and needs."
  },
  {
    "question": "Which is NOT a requirement gathering technique?",
    "options": [
      "Interview",
      "Questionnaire",
      "Observation",
      "Compilation"
    ],
    "answer": "Compilation",
    "explanation": "Compilation is a programming process that converts source code into machine code, not a method for gathering requirements."
  },
  {
    "question": "Documentation helps to:",
    "options": [
      "Reduce understanding",
      "Improve communication",
      "Increase  errors",
      "Delay projects"
    ],
    "answer": "Improve communication",
    "explanation": "Clear documentation ensures that all stakeholders, analysts, and developers share a unified understanding of the system."
  },
  {
    "question": "A common documentation tool is:",
    "options": [
      "DFD",
      "Compiler",
      "Browser",
      "Scanner"
    ],
    "answer": "DFD",
    "explanation": "Data Flow Diagrams (DFDs) are a standard visual documentation tool used to document system processes and data logic."
  },
  {
    "question": "System prototyping means:",
    "options": [
      "Final implementation",
      "Preliminary model creation",
      "Testing  only",
      "Documentation only"
    ],
    "answer": "Preliminary model creation",
    "explanation": "Prototyping involves building an early, scaled-down version of the system to test concepts and gather user feedback."
  },
  {
    "question": "One benefit of prototyping is:",
    "options": [
      "Better user feedback",
      "More cost",
      "Longer development",
      "Less communication"
    ],
    "answer": "Better user feedback",
    "explanation": "Users can interact with a tangible prototype, making it easier for them to identify missing requirements and provide constructive feedback."
  },
  {
    "question": "A drawback of prototyping is:",
    "options": [
      "Misleading expectations",
      "No feedback",
      "No design",
      "No  testing"
    ],
    "answer": "Misleading expectations",
    "explanation": "Users may mistake a rapid, incomplete prototype for a fully functional system, leading to unrealistic expectations about delivery timelines."
  },
  {
    "question": "An open system:",
    "options": [
      "Interacts with environment",
      "Is isolated",
      "Has no users",
      "Cannot change"
    ],
    "answer": "Interacts with environment",
    "explanation": "Open systems exchange data, matter, or energy with their external environment, adapting to outside inputs."
  },
  {
    "question": "A closed system:",
    "options": [
      "Exchanges information",
      "Is independent of environment",
      "Uses cloud  computing",
      "Uses internet"
    ],
    "answer": "Is independent of environment",
    "explanation": "Closed systems are self-contained and do not interact with or rely on external environments for their operation."
  },
  {
    "question": "A system specification document contains:",
    "options": [
      "Requirements",
      "Recipes",
      "Advertisements",
      "Emails"
    ],
    "answer": "Requirements",
    "explanation": "A specification document serves as the formal repository for all functional and non-functional requirements of the system."
  },
  {
    "question": "System maintenance occurs:",
    "options": [
      "Before deployment",
      "After deployment",
      "Before design",
      "During analysis"
    ],
    "answer": "After deployment",
    "explanation": "The maintenance phase formally begins once the system has been launched and is in use by the end-users."
  },
  {
    "question": "Corrective maintenance fixes:",
    "options": [
      "Bugs",
      "New features",
      "Performance",
      "Documentation"
    ],
    "answer": "Bugs",
    "explanation": "Corrective maintenance is specifically reactive, dealing with repairing defects, bugs, and system crashes as they occur."
  },
  {
    "question": "Adaptive maintenance addresses:",
    "options": [
      "Environmental changes",
      "Bugs",
      "Reports",
      "Security  only"
    ],
    "answer": "Environmental changes",
    "explanation": "Adaptive maintenance modifies the software to keep it compatible with a changing external environment, such as OS updates or new hardware."
  },
  {
    "question": "Perfective maintenance improves:",
    "options": [
      "Functionality",
      "Installation",
      "Compilation",
      "Hardware"
    ],
    "answer": "Functionality",
    "explanation": "Perfective maintenance involves tweaking and optimizing the system to improve performance, user experience, or add minor enhancements."
  },
  {
    "question": "Preventive maintenance aims to:",
    "options": [
      "Avoid future problems",
      "Add features",
      "Reduce users",
      "Replace systems"
    ],
    "answer": "Avoid future problems",
    "explanation": "Preventive maintenance proactively addresses potential issues, such as refactoring code to prevent future system degradation."
  },
  {
    "question": "Quality assurance ensures:",
    "options": [
      "High-quality software",
      "More bugs",
      "Less documentation",
      "No  testing"
    ],
    "answer": "High-quality software",
    "explanation": "Quality Assurance (QA) encompasses the processes and standards designed to ensure the final product is reliable, functional, and of high quality."
  },
  {
    "question": "A QA technique is:",
    "options": [
      "Testing",
      "Formatting",
      "Printing",
      "Uploading"
    ],
    "answer": "Testing",
    "explanation": "Testing is a core QA technique used to identify defects and verify that the system behaves as intended."
  },
  {
    "question": "Code review is a:",
    "options": [
      "QA technique",
      "Database technique",
      "Marketing technique",
      "Hardware  technique"
    ],
    "answer": "QA technique",
    "explanation": "Code reviews involve peers inspecting source code to find mistakes, ensuring adherence to standards, and improving overall software quality."
  },
  {
    "question": "A common project risk is:",
    "options": [
      "Requirement changes",
      "Documentation",
      "Maintenance",
      "Printing"
    ],
    "answer": "Requirement changes",
    "explanation": "Scope creep and changing requirements are major risks that can lead to budget overruns and delayed schedules."
  },
  {
    "question": "Risk management involves:",
    "options": [
      "Ignoring risks",
      "Identifying and controlling risks",
      "Deleting  requirements",
      "Avoiding users"
    ],
    "answer": "Identifying and controlling risks",
    "explanation": "Effective risk management requires proactively identifying potential threats and creating mitigation strategies to control their impact."
  },
  {
    "question": "Stakeholder analysis identifies:",
    "options": [
      "Interested parties",
      "Databases",
      "Networks",
      "Servers"
    ],
    "answer": "Interested parties",
    "explanation": "Stakeholder analysis maps out all individuals, groups, or organizations that have an interest or role in the system's success."
  },
  {
    "question": "Stakeholder analysis helps:",
    "options": [
      "Understand expectations",
      "Increase costs",
      "Delay projects",
      "Reduce communication"
    ],
    "answer": "Understand expectations",
    "explanation": "By analyzing stakeholders, project managers can understand competing priorities, manage expectations, and tailor communication."
  },
  {
    "question": "A use case diagram is part of:",
    "options": [
      "UML",
      "HTML",
      "SQL",
      "CSS"
    ],
    "answer": "UML",
    "explanation": "Use Case Diagrams are a core component of the Unified Modeling Language (UML) standard used in software engineering."
  },
  {
    "question": "A use case diagram shows:",
    "options": [
      "User interactions",
      "Hardware",
      "Networks",
      "Algorithms"
    ],
    "answer": "User interactions",
    "explanation": "Use Case Diagrams visualize how external actors interact with the system to achieve specific goals."
  },
  {
    "question": "The stick figure in a use case diagram is:",
    "options": [
      "Actor",
      "Process",
      "Entity",
      "Database"
    ],
    "answer": "Actor",
    "explanation": "In UML notation, stick figures visually represent the 'actors'—users or external systems interacting with the software."
  },
  {
    "question": "Cloud computing provides:",
    "options": [
      "Remote computing resources",
      "Paper records",
      "Hardware  repair",
      "Office furniture"
    ],
    "answer": "Remote computing resources",
    "explanation": "Cloud computing delivers servers, storage, databases, and software over the internet rather than relying on local hardware."
  },
  {
    "question": "Artificial Intelligence assists in:",
    "options": [
      "Automation and decision making",
      "Painting",
      "Cabling",
      "Printing"
    ],
    "answer": "Automation and decision making",
    "explanation": "AI technologies help systems process data autonomously, recognize patterns, and make intelligent decisions to automate tasks."
  },
  {
    "question": "Modular design divides a system into:",
    "options": [
      "Networks",
      "Independent modules",
      "Databases",
      "Servers"
    ],
    "answer": "Independent modules",
    "explanation": "Modular design breaks down a complex system into smaller, manageable, and largely independent components or modules."
  },
  {
    "question": "An advantage of modular design is:",
    "options": [
      "Easier maintenance",
      "Higher complexity",
      "More errors",
      "Less reuse"
    ],
    "answer": "Easier maintenance",
    "explanation": "Because modules are independent, developers can update or fix one module without breaking the rest of the system."
  },
  {
    "question": "A system flowchart represents:",
    "options": [
      "Flow of operations",
      "Database structure",
      "User roles",
      "Requirements"
    ],
    "answer": "Flow of operations",
    "explanation": "System flowcharts graphically show the sequence of operations, data processing, and physical media used within a system."
  },
  {
    "question": "A DFD focuses on:",
    "options": [
      "Data movement",
      "Program logic",
      "Hardware",
      "Security"
    ],
    "answer": "Data movement",
    "explanation": "Unlike flowcharts that show control logic, DFDs strictly focus on how data pathways flow between processes and data stores."
  },
  {
    "question": "Version control helps:",
    "options": [
      "Track changes",
      "Delete files",
      "Replace users",
      "Avoid backups"
    ],
    "answer": "Track changes",
    "explanation": "Version control systems keep a historical record of all code modifications, allowing developers to track changes and revert if necessary."
  },
  {
    "question": "Git is an example of:",
    "options": [
      "Version control system",
      "Database",
      "Operating system",
      "Compiler"
    ],
    "answer": "Version control system",
    "explanation": "Git is the most widely used distributed version control system for tracking changes in source code during software development."
  },
  {
    "question": "Ethics in system design include:",
    "options": [
      "Privacy protection",
      "Data theft",
      "Piracy",
      "Hacking"
    ],
    "answer": "Privacy protection",
    "explanation": "Ethical system design mandates safeguarding user data, ensuring privacy, and preventing unauthorized access or misuse."
  },
  {
    "question": "A legal consideration is:",
    "options": [
      "Copyright compliance",
      "Faster coding",
      "Testing",
      "Maintenance"
    ],
    "answer": "Copyright compliance",
    "explanation": "When building software, developers must legally ensure they are not infringing on copyrights, patents, or violating open-source licenses."
  },
  {
    "question": "A data dictionary contains:",
    "options": [
      "Definitions of data elements",
      "Source code",
      "Test cases",
      "Hardware details"
    ],
    "answer": "Definitions of data elements",
    "explanation": "A data dictionary is a central repository containing metadata, such as definitions, formats, and relationships of data elements in a database."
  },
  {
    "question": "Scalability refers to:",
    "options": [
      "Ability to grow with demand",
      "Database deletion",
      "Coding standards",
      "Maintenance"
    ],
    "answer": "Ability to grow with demand",
    "explanation": "Scalability is a system's capacity to seamlessly handle a growing amount of work or its potential to be enlarged to accommodate growth."
  },
  {
    "question": "A scalable system can:",
    "options": [
      "Handle increased workload",
      "Prevent upgrades",
      "Reduce users",
      "Remove databases"
    ],
    "answer": "Handle increased workload",
    "explanation": "As user numbers or data volumes grow, a scalable system maintains performance without requiring a complete architectural overhaul."
  },
  {
    "question": "Change management involves:",
    "options": [
      "Managing system transition",
      "Coding",
      "Testing",
      "Networking"
    ],
    "answer": "Managing system transition",
    "explanation": "Change management is the structured approach to transitioning individuals, teams, and organizations from a current system to a new one."
  },
  {
    "question": "Parallel changeover means:",
    "options": [
      "Old and new systems run together",
      "Immediate replacement",
      "Partial replacement",
      "Pilot use"
    ],
    "answer": "Old and new systems run together",
    "explanation": "In a parallel changeover, the legacy system and the new system run simultaneously until the new system is proven completely reliable."
  },
  {
    "question": "Direct changeover means:",
    "options": [
      "Immediate switch",
      "Trial implementation",
      "Dual operation",
      "Gradual replacement"
    ],
    "answer": "Immediate switch",
    "explanation": "A direct (or plunge) changeover involves turning off the old system and turning on the new system immediately on a specific date."
  },
  {
    "question": "Phased changeover introduces:",
    "options": [
      "System components gradually",
      "Entire system at once",
      "No testing",
      "No training"
    ],
    "answer": "System components gradually",
    "explanation": "In a phased implementation, parts of the new system are introduced sequentially, replacing corresponding parts of the old system over time."
  },
  {
    "question": "Pilot changeover involves:",
    "options": [
      "Testing in one department first",
      "Full deployment",
      "No  deployment",
      "Hardware testing"
    ],
    "answer": "Testing in one department first",
    "explanation": "A pilot strategy implements the entire new system but limits its initial rollout to a single department or location to test it in a live environment."
  },
  {
    "question": "User training helps:",
    "options": [
      "Effective system use",
      "Increase confusion",
      "Delay implementation",
      "Remove users"
    ],
    "answer": "Effective system use",
    "explanation": "Proper training ensures users understand how to navigate the system, reducing resistance and maximizing productivity."
  },
  {
    "question": "In e-commerce ordering, the first activity is usually:",
    "options": [
      "Browse products",
      "Ship order",
      "Payment confirmation",
      "Delivery"
    ],
    "answer": "Browse products",
    "explanation": "The workflow of an e-commerce platform typically begins with the user browsing or searching for products in the catalog."
  },
  {
    "question": "After selecting products, users typically:",
    "options": [
      "Add to cart",
      "Deliver order",
      "Logout",
      "Print  receipt"
    ],
    "answer": "Add to cart",
    "explanation": "Once a user decides on a product, the logical next step in the e-commerce workflow is adding the item to a virtual shopping cart."
  },
  {
    "question": "Payment processing occurs:",
    "options": [
      "Before checkout",
      "During checkout",
      "After delivery",
      "Before  browsing"
    ],
    "answer": "During checkout",
    "explanation": "Payment processing is an integral part of the checkout phase, required to authorize the purchase before the order is finalized."
  },
  {
    "question": "An activity diagram represents:",
    "options": [
      "Workflow sequence",
      "Database structure",
      "Network  topology",
      "Hardware layout"
    ],
    "answer": "Workflow sequence",
    "explanation": "Activity diagrams visually model the step-by-step sequence of business or operational workflows of components in a system."
  },
  {
    "question": "Which UML diagram models activities?",
    "options": [
      "Activity Diagram",
      "ERD",
      "DFD",
      "Flowchart"
    ],
    "answer": "Activity Diagram",
    "explanation": "The Activity Diagram is a specific type of UML behavioral diagram used to describe dynamic aspects of the system."
  },
  {
    "question": "Requirement validation ensures:",
    "options": [
      "Requirements meet user needs",
      "Faster coding",
      "Hardware purchase",
      "Maintenance"
    ],
    "answer": "Requirements meet user needs",
    "explanation": "Validation checks the documented requirements against the actual needs of the business to ensure the right system is being built."
  },
  {
    "question": "The primary objective of SDLC is:",
    "options": [
      "Develop quality systems",
      "Increase costs",
      "Avoid  documentation",
      "Reduce testing"
    ],
    "answer": "Develop quality systems",
    "explanation": "The overarching goal of the SDLC framework is to produce high-quality systems that meet or exceed customer expectations within time and cost estimates."
  },
  {
    "question": "Which document defines project requirements?",
    "options": [
      "SRS",
      "Invoice",
      "Logbook",
      "Memo"
    ],
    "answer": "SRS",
    "explanation": "The Software Requirement Specification (SRS) is the primary document that thoroughly describes what the software will do and how it will be expected to perform."
  },
  {
    "question": "SRS stands for:",
    "options": [
      "Software Requirement Specification",
      "System Reporting Service",
      "Software Resource System",
      "Service Requirement Software"
    ],
    "answer": "Software Requirement Specification",
    "explanation": "SRS stands for Software Requirement Specification, the foundational blueprint used by designers and developers."
  },
  {
    "question": "Agile development uses:",
    "options": [
      "Iterations",
      "Sequential phases only",
      "No feedback",
      "No planning"
    ],
    "answer": "Iterations",
    "explanation": "Agile is built on iterative cycles (sprints), allowing teams to build, test, and release software in small, manageable increments."
  },
  {
    "question": "The Waterfall model is:",
    "options": [
      "Linear and sequential",
      "Iterative",
      "Spiral",
      "Adaptive"
    ],
    "answer": "Linear and sequential",
    "explanation": "The Waterfall model progresses in a strict downward sequence through predefined phases, with no overlapping between them."
  },
  {
    "question": "A major goal of documentation is:",
    "options": [
      "Knowledge sharing",
      "Increasing bugs",
      "Delaying  projects",
      "Avoiding communication"
    ],
    "answer": "Knowledge sharing",
    "explanation": "Documentation preserves institutional knowledge, making it easier for new developers to understand the system and for maintainers to fix it."
  },
  {
    "question": "Stakeholders include:",
    "options": [
      "Users and managers",
      "Printers only",
      "Servers only",
      "Databases  only"
    ],
    "answer": "Users and managers",
    "explanation": "Stakeholders are any individuals involved in or affected by the system, which primarily includes end-users, management, and developers."
  },
  {
    "question": "Successful systems depend on:",
    "options": [
      "Accurate requirements",
      "Expensive hardware",
      "Large  offices",
      "Fast internet only"
    ],
    "answer": "Accurate requirements",
    "explanation": "If requirements are inaccurate, the final system will fail to solve the actual business problem, regardless of how well it is coded."
  },
  {
    "question": "The most important factor in system development is:",
    "options": [
      "Meeting user needs",
      "Using the  newest technology",
      "Buying more computers",
      "Increasing project duration"
    ],
    "answer": "Meeting user needs",
    "explanation": "The ultimate measure of a system's success is whether it effectively solves the users' problems and fulfills their operational needs."
  }
]

// App State Variables
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

// DOM Elements
const screens = {
    landing: document.getElementById('landing-page'),
    quiz: document.getElementById('quiz-page'),
    results: document.getElementById('results-page')
};

const UI = {
    startBtn: document.getElementById('start-btn'),
    retakeBtn: document.getElementById('retake-btn'),
    nextBtn: document.getElementById('next-btn'),
    correctCountText: document.getElementById('correct-count'),
    wrongCountText: document.getElementById('wrong-count'),
    leftCountText: document.getElementById('left-count'),
    progressText: document.getElementById('progress-text'),
    progressFill: document.getElementById('progress-fill'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackContainer: document.getElementById('feedback-container'),
    explanationText: document.getElementById('explanation-text')
};

// Utility: Fisher-Yates Shuffle
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Navigation
function showScreen(screenKey) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenKey].classList.remove('hidden');
    screens[screenKey].classList.add('active');
}

// Initialization
function startQuiz() {
    shuffledQuestions = shuffleArray(questionDB);
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;

    updateStats();
    loadQuestion();
    showScreen('quiz');
}

// Render Question
function loadQuestion() {
    UI.feedbackContainer.classList.add('hidden');
    UI.optionsContainer.innerHTML = '';

    const currentQ = shuffledQuestions[currentQuestionIndex];
    UI.questionText.textContent = currentQ.question;

    // Update Progress
    const questionNumber = currentQuestionIndex + 1;
    const totalQuestions = shuffledQuestions.length;
    UI.progressText.textContent = `Question ${questionNumber} of ${totalQuestions}`;
    UI.progressFill.style.width = `${(questionNumber / totalQuestions) * 100}%`;

    // Shuffle options
    const shuffledOptions = shuffleArray(currentQ.options);

    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => handleAnswer(btn, option, currentQ.answer, currentQ.explanation));
        UI.optionsContainer.appendChild(btn);
    });
}

// Handle Answer Selection
function handleAnswer(selectedBtn, selectedText, correctText, explanation) {
    // Lock all options
    const allOptions = UI.optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctText) {
            btn.classList.add('correct');
        }
    });

    // Check correctness
    if (selectedText === correctText) {
        correctCount++;
        UI.explanationText.innerHTML = `<strong>Correct!</strong> ${explanation}`;
    } else {
        wrongCount++;
        selectedBtn.classList.add('wrong');
        UI.explanationText.innerHTML = `<strong>Incorrect.</strong> ${explanation}`;
    }

    updateStats();
    UI.feedbackContainer.classList.remove('hidden');
}

// Update Header Stats
function updateStats() {
    const total = shuffledQuestions.length;
    const left = total - (correctCount + wrongCount);

    UI.correctCountText.textContent = correctCount;
    UI.wrongCountText.textContent = wrongCount;
    UI.leftCountText.textContent = left;
}

// Advance to Next Question or Results
function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Calculate and Display Results
function showResults() {
    const total = shuffledQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);

    document.getElementById('res-total').textContent = total;
    document.getElementById('res-correct').textContent = correctCount;
    document.getElementById('res-wrong').textContent = wrongCount;
    document.getElementById('res-score').textContent = `${percentage}%`;

    const msgEl = document.getElementById('performance-message');
    if (percentage >= 90) msgEl.textContent = "Excellent!";
    else if (percentage >= 75) msgEl.textContent = "Great Job!";
    else if (percentage >= 50) msgEl.textContent = "Good Effort!";
    else msgEl.textContent = "Keep Practicing!";

    showScreen('results');
}

// Event Listeners
UI.startBtn.addEventListener('click', startQuiz);
UI.nextBtn.addEventListener('click', handleNext);
UI.retakeBtn.addEventListener('click', startQuiz);

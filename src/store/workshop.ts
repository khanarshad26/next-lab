import { IWorkshop } from "@/types";

export const workshops: IWorkshop[] = [
    {
        id: 'workshop_arduino',
        title: 'Arduino and C Programming',
        trainerid: 'trainer_arshadkhan',
        fee: 'Rs. 999',
        availableSeats: 50,
        schedule: '5PM - 7PM',
        image: "/assets/img/workshops/arduino_uno.jpg", 
        subject: 'Microcontroller', 
        summary: 'Beginner level course for Microcontroller Architecture with hand-on practice guide', 
        description: 'The Arduino is an open-source computer hardware/software platform for building digital devices and interactive objects that can sense and control the physical world around them. In this class you will learn how the Arduino platform works in terms of the physical board and libraries and the IDE (integrated development environment). You will also learn about shields, which are smaller boards that plug into the main Arduino board to perform other functions such as sensing light, heat, GPS tracking, or providing a user interface display. The course will also cover programming the Arduino using C code and accessing the pins on the board via the software to control external devices. Please note that this course does not include discussion forums.',
        enrolled: '65',
        courseWork: {
            'Chapter 1': { 
                title: 'Basic Arduino Architecture', 
                description: "Outline the composition of the Arduino development board and Describe what it means to program the board's firmware and Read board schematics and Install Arduino IDE",
                image: "/assets/img/workshops/arduino_uno.jpg",
            },
            'Chapter 2': { 
                title: 'Introduction to shields', 
                description: "Describe what 'shields' are and how they are used and Specify the role of libraries in the use of shields",
                image: "/assets/img/workshops/arduino_uno.jpg",
            },
            'Chapter 3': { 
                title: 'C Programming', 
                description: "Compile and run a program and Name C Variables and Types and Name common C operators and Use conditionals and loops Explain functions, their definition and invocation",
                image: "/assets/img/workshops/arduino_uno.jpg",
            },
            'Chapter 4': { 
                title: 'Advance use case for Arduino', 
                description: "he importance of controllability and observability in the debugging process, Describe common debugging architectures for embedded systems, how the UART Serial communication protocol works and the Arduino Serial library performs serial communication",
                image: "/assets/img/workshops/arduino_uno.jpg",
            },
        },
    },
    {
        id: 'workshop_robotics',
        title: 'Robotics Essentials',
        trainerid: 'trainer_arshadkhan',
        image: "/assets/img/workshops/robotics.jpg", 
        subject: 'Robotics', 
        summary: 'Modern Robotics: Mechanics, Planning, and Control Specialization', 
        enrolled: '65',
        fee: 'Rs. 999',
        availableSeats: 50,
        schedule: '5PM - 7PM',
        description: "This Specialization provides a rigorous treatment of spatial motion and the dynamics of rigid bodies, employing representations from modern screw theory and the product of exponentials formula.  Students with a freshman-level engineering background will quickly learn to apply these tools to analysis, planning, and control of robot motion.  Students' understanding of the mathematics of robotics will be solidified by writing robotics software.  Students will test their software on a free state-of-the-art cross-platform robot simulator, allowing each student to have an authentic robot programming experience with industrial robot manipulators and mobile robots without purchasing expensive robot hardware.  It is highly recommended that Courses 1-6 of the Specialization are taken in order, since the material builds on itself.",

        courseWork: {
            'Chapter 1': { 
                title: 'Foundations of Robot Motion', 
                description: "Do you want to know how robots work?  Are you interested in robotics as a career?  Are you willing to invest the effort to learn fundamental mathematical modeling techniques that are used in all subfields of robotics?",
                image: "/assets/img/workshops/robotics.jpg",
            },
            'Chapter 2': { 
                title: 'Robot Kinematics', 
                description: "Do you want to know how robots work?  Are you interested in robotics as a career?  Are you willing to invest the effort to learn fundamental mathematical modeling techniques that are used in all subfields of robotics?",
                image: "/assets/img/workshops/robotics.jpg",
            },
            'Chapter 3': { 
                title: 'Robot Dynamics', 
                description: 'Learn fundamental mathematical modeling techniques that are used in all subfields of robotics?',
                image: "/assets/img/workshops/robotics.jpg",
            },
            'Chapter 4': { 
                title: 'Robot Motion Planning and Control', 
                description: "Learn fundamental mathematical modeling techniques that are used in all subfields of robotics?",
                image: "/assets/img/workshops/robotics.jpg",
            },
        },
    },
    {
        id: 'workshop_iot',
        title: 'Introduction to IOT',
        trainerid: 'trainer_arshadkhan',
        fee: 'Rs. 999',
        availableSeats: 50,
        schedule: '5PM - 7PM',
        image: "/assets/img/workshops/iot.jpg", 
        subject: 'Internet Of Things', 
        summary: 'Design, create, and deploy a fun IoT device using Arduino and Raspberry Pi platforms.', 
        enrolled: '65',
        description: 'This Specialization covers embedded systems, the Raspberry Pi Platform, and the Arduino environment for building devices that can control the physical world. In the final Capstone Project, you’ll apply the skills you learned by designing, building, and testing a microcontroller-based embedded system, producing a unique final project suitable for showcasing to future employers. Please note that this specialization does not offer discussion forums.',
        courseWork: {
            'Chapter 1': { 
                title: 'Introduction to the Internet of Things and Embedded Systems', 
                description: 'The explosive growth of the “Internet of Things” is changing our world and the rapid drop in price for typical IoT components is allowing people to innovate new designs and products at home.',
                image: "/assets/img/workshops/iot.jpg",
            },
            'Chapter 2': { 
                title: 'Interfacing with the Arduino', 
                description: 'Arduino senses the environment by receiving inputs from add-on devices such as sensors, and can control the world around it by adjusting lights, motors, and other actuators.',
                image: "/assets/img/workshops/iot.jpg",
            },
            'Chapter 3': { 
                title: 'Raspberry Pi Essentials', 
                description: 'The Raspberry Pi is a small, affordable single-board computer that you will use to design and develop fun and practical IoT devices while learning programming and computer hardware',
                image: "/assets/img/workshops/iot.jpg",
            },
            'Chapter 4': { 
                title: 'Python Programming for the Raspberry Pi', 
                description: 'You will also learn how to use Python-based IDE (integrated development environments) for the Raspberry Pi and how to trace and debug Python code on the device. Please note that this course does not include discussion forums.',
                image: "/assets/img/workshops/iot.jpg",
            },
        },
    },
]
const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare Budget",
                "description": "Draft the annual budget report for the department.",
                "category": "Finance",
                "date": "2025-01-18"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Audit Records",
                "description": "Conduct a review of last quarter's financial records.",
                "category": "Audit",
                "date": "2025-01-15"
            }
        ],
        "taskNumbers": {
            "total": 2,
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "email": "employeeB@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Design New Logo",
                "description": "Create a logo design for the new product line.",
                "category": "Design",
                "date": "2025-01-19"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Prepare Contract",
                "description": "Draft and finalize the vendor contracts.",
                "category": "Legal",
                "date": "2025-01-17"
            }
        ],
        "taskNumbers": {
            "total": 2,
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Diya",
        "email": "employeeC@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Launch Campaign",
                "description": "Execute the social media marketing campaign.",
                "category": "Marketing",
                "date": "2025-01-20"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Customer Feedback",
                "description": "Analyze and summarize customer feedback.",
                "category": "Analysis",
                "date": "2025-01-16"
            }
        ],
        "taskNumbers": {
            "total": 2,
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Meera",
        "email": "employeeD@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Update Policy Documents",
                "description": "Revise and update internal policy documents.",
                "category": "HR",
                "date": "2025-01-12"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Schedule Interviews",
                "description": "Organize interviews for new job applicants.",
                "category": "Recruitment",
                "date": "2025-01-21"
            }
        ],
        "taskNumbers": {
            "total": 2,
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employeeE@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Develop Feature",
                "description": "Work on the development of the new user dashboard feature.",
                "category": "Development",
                "date": "2025-01-18"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Bug Fix",
                "description": "Resolve critical bugs reported by QA.",
                "category": "Testing",
                "date": "2025-01-14"
            }
        ],
        "taskNumbers": {
            "total": 2,
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin = [
    {
        "id": 1,
        "email": "adminA@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees1', JSON.stringify(employees))
    localStorage.setItem('admin1', JSON.stringify(admin))
   
}

export const getLocalStorage = () => {
    const employees1 = JSON.parse(localStorage.getItem('employees1'))
    const admin1 = JSON.parse(localStorage.getItem('admin1'))

    // console.log(employees, admin);
    

    return {employees,admin}

}

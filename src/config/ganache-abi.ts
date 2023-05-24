export const EMPLOYEE_ADDRESS: string = "0xA45BaCd3368D91886d5FA0e333fd3691B02caeD7";

export const EMPLOYEE_ABI: any[] = [
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "firstName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "education",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "designation",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "techStack",
            "type": "string[]"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "remarks",
            "type": "string"
          }
        ],
        "indexed": false,
        "internalType": "struct Employee.EmployeeData",
        "name": "",
        "type": "tuple"
      }
    ],
    "name": "NewEmployee",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "employeeCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getEmployeeList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "firstName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "education",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "designation",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "techStack",
            "type": "string[]"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "remarks",
            "type": "string"
          }
        ],
        "internalType": "struct Employee.EmployeeData[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "firstName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "education",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "designation",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "techStack",
            "type": "string[]"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "remarks",
            "type": "string"
          }
        ],
        "internalType": "struct Employee.EmployeeData",
        "name": "_employee",
        "type": "tuple"
      }
    ],
    "name": "addEmployee",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "firstName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "education",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "designation",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "techStack",
            "type": "string[]"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "remarks",
            "type": "string"
          }
        ],
        "internalType": "struct Employee.EmployeeData",
        "name": "_employee",
        "type": "tuple"
      }
    ],
    "name": "editEmployee",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_id",
        "type": "string"
      }
    ],
    "name": "deleteEmployee",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_indexOfElement",
        "type": "uint256"
      }
    ],
    "name": "deleteArrayElement",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
];
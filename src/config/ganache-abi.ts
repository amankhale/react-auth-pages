export const EMPLOYEE_ADDRESS: string = "0x7F5942ABdc3D41e4aD6eE2Cb46DB1208B677C14B";

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
            "internalType": "string[3]",
            "name": "techStack",
            "type": "string[3]"
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "employeeList",
    "outputs": [
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
            "internalType": "string[3]",
            "name": "techStack",
            "type": "string[3]"
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
  }
];
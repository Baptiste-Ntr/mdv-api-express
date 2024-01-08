Cette api a pour but d'avoir les infos des pilotes de Formule 1 ainsi que de leurs écuries

DOC : 

# GET

## /driver

-> drivers : [  
    {  
        'firstname' : String,  
        'lastname' : String,  
        'team' : String  
    }  
]  

## /team

-> team : [  
    {  
        'name' : String,  
        'country' : String  
    }  
]  

## /drivernumber/:driverName

-> "permanentNumber": String

## /driverinfo/:driverName

-> "permanentNumber": String,  
    "driverLastName": String,  
    "driverFirstName": String,  
    "driverTeam": String  


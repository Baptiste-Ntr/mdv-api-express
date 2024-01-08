# API Documentation

Cette API a pour but d'avoir les infos des pilotes de Formule 1 ainsi que de leurs écuries.

## Routes

### GET /driver

This route return a list of all drivers

**Réponse attendue :**

```json
{
    "drivers": [
        {
            "firstname": "String",
            "lastname": "String",
            "team": "String"
        }
    ]
}
```

### GET /team

This route return a list of all teams

**Response :**

```json
{
    "team": [
        {
            "name": "String",
            "country": "String"
        }
    ]
}
```

### GET /drivernumber/:driverName

This route return the specific number of a driver

**Response :**

```json
{
    "permanentNumber": "String"
}
```

### GET /driverinfo/:driverName

This route return specifics info on a driver

**Response :**

```json
{
    "permanentNumber": "String",
    "driverLastName": "String",
    "driverFirstName": "String",
    "driverTeam": "String"
}
```
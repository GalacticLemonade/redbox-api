import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
        Errors: [],
        States: [
            {
                "Id": 1,
                "Description": "Alabama"
            },
            {
                "Id": 2,
                "Description": "Alaska"
            },
            {
                "Id": 3,
                "Description": "Arizona"
            },
            {
                "Id": 4,
                "Description": "Arkansas"
            },
            {
                "Id": 5,
                "Description": "California"
            },
            {
                "Id": 6,
                "Description": "Colorado"
            },
            {
                "Id": 7,
                "Description": "Connecticut"
            },
            {
                "Id": 8,
                "Description": "Delaware"
            },
            {
                "Id": 9,
                "Description": "Florida"
            },
            {
                "Id": 10,
                "Description": "Georgia"
            },
            {
                "Id": 11,
                "Description": "Hawaii"
            },
            {
                "Id": 12,
                "Description": "Idaho"
            },
            {
                "Id": 13,
                "Description": "Illinois"
            },
            {
                "Id": 14,
                "Description": "Indiana"
            },
            {
                "Id": 15,
                "Description": "Iowa"
            },
            {
                "Id": 16,
                "Description": "Kansas"
            },
            {
                "Id": 17,
                "Description": "Kentucky"
            },
            {
                "Id": 18,
                "Description": "Louisiana"
            },
            {
                "Id": 19,
                "Description": "Maine"
            },
            {
                "Id": 20,
                "Description": "Maryland"
            },
            {
                "Id": 21,
                "Description": "Massachusetts"
            },
            {
                "Id": 22,
                "Description": "Michigan"
            },
            {
                "Id": 23,
                "Description": "Minnesota"
            },
            {
                "Id": 24,
                "Description": "Mississippi"
            },
            {
                "Id": 25,
                "Description": "Missouri"
            },
            {
                "Id": 26,
                "Description": "Montana"
            },
            {
                "Id": 27,
                "Description": "Nebraska"
            },
            {
                "Id": 28,
                "Description": "Nevada"
            },
            {
                "Id": 29,
                "Description": "New Hampshire"
            },
            {
                "Id": 30,
                "Description": "New Jersey"
            },
            {
                "Id": 31,
                "Description": "New Mexico"
            },
            {
                "Id": 32,
                "Description": "New York"
            },
            {
                "Id": 33,
                "Description": "North Carolina"
            },
            {
                "Id": 34,
                "Description": "North Dakota"
            },
            {
                "Id": 35,
                "Description": "Ohio"
            },
            {
                "Id": 36,
                "Description": "Oklahoma"
            },
            {
                "Id": 37,
                "Description": "Oregon"
            },
            {
                "Id": 38,
                "Description": "Pennsylvania"
            },
            {
                "Id": 39,
                "Description": "Rhode Island"
            },
            {
                "Id": 40,
                "Description": "South Carolina"
            },
            {
                "Id": 41,
                "Description": "South Dakota"
            },
            {
                "Id": 42,
                "Description": "Tennessee"
            },
            {
                "Id": 43,
                "Description": "Texas"
            },
            {
                "Id": 44,
                "Description": "Utah"
            },
            {
                "Id": 45,
                "Description": "Vermont"
            },
            {
                "Id": 46,
                "Description": "Virginia"
            },
            {
                "Id": 47,
                "Description": "Washington"
            },
            {
                "Id": 48,
                "Description": "West Virginia"
            },
            {
                "Id": 49,
                "Description": "Wisconsin"
            },
            {
                "Id": 50,
                "Description": "Wyoming"
            },
            {
                "Id": 51,
                "Description": "District of Columbia"
            },
            {
                "Id": 52,
                "Description": "American Samoa"
            },
            {
                "Id": 53,
                "Description": "Guam"
            },
            {
                "Id": 54,
                "Description": "Northern Mariana Islands"
            },
            {
                "Id": 55,
                "Description": "Puerto Rico"
            },
            {
                "Id": 56,
                "Description": "U.S. Virgin Islands"
            }
        ]
    })
}

export const method = 'GET'
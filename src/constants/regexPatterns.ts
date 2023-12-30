//use g for global regexp support
//use i for insensitive case
export const DIGITALADDRESSREGEX = new RegExp(/^[a-z]{2}\d{7}$/i) //ex: GA0569252

export const PHONENUMBERREGEX = new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im);

export const EMAILREGEX = new RegExp(/^\S+@\S+\.\S+/i)
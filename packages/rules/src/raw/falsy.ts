/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { truthy } from './truthy'

export const falsy = (input: any): boolean => !truthy(input)

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Ryan Duffet
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value)

  // process
  const celcius = (fahrenheit - 32) * 5/9

  // output
  document.getElementById('celcius').innerHTML = 'The temperature is: ' + celcius.toFixed(2) + ' °C '
}
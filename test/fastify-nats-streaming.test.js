/*
 * Copyright 2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict'

// const assert = require('assert')
const test = require('tap').test
// const sget = require('simple-get').concat
const Fastify = require('fastify')

/** @test {CloudEvent} */
test('ensure decorator functions (exposed by the plugin) exists', (t) => {
  t.plan(1)
  const fastify = Fastify()
  fastify.register(require('../src/plugin')) // configure this plugin with its default options

  fastify.listen(0, (err) => {
    fastify.server.unref()
    t.error(err)

    // TODO: add tests on decorators exposed by the plugin ...
  })
})

// TODO: add more tests ...

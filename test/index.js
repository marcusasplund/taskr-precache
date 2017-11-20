'use strict'

const {join} = require('path')
const test = require('tape')
const Taskr = require('taskr')

const dir = join(__dirname, 'fixtures')
const tmp = join(__dirname, 'tmp')

test('taskr-precache', t => {
	t.plan(4)

	const task = new Taskr({
		plugins: [
			require('../lib'),
			require('@taskr/clear')
		],
		tasks: {
			*a(f) {
				t.true('precache' in task.plugins, 'attach `precache()` plugin to taskr')
				yield f.source(`${dir}/*.*`).precache().target(tmp)

				const arr1 = yield f.$.expand(`${tmp}/**/*.js`)
				t.equal(arr1.length, 3, 'create all files within target dir')
				const arr2 = yield f.$.expand(`${tmp}/sw/*`)
				t.equal(arr2.length, 2, 'create two files within `/sw` subdir')
				yield f.clear(tmp)
				yield f.source(`${dir}/*.*`).precache({cacheId: 'taskr-test'}).target(tmp)
				const str1 = yield f.$.read(`${tmp}/service-worker.js`, 'utf8')
				t.true(str1.indexOf('taskr-test') !== -1, 'assign a `cacheId` name')
				yield f.clear(tmp)
			}
		}
	})

	task.start('a')
})

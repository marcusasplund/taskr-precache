const join = require('path').join
const test = require('tape')
const Fly = require('fly')

const dir = join(__dirname, 'fixtures')
const plugins = [require('fly-clear'), require('../')]

const tmpDir = str => join(__dirname, str)
const create = tasks => new Fly({tasks, plugins})

test('fly-precache', t => {
  t.plan(2)
  const fly = create({
    *foo(f) {
      t.true('precache' in f, 'attach `precache` to Task instance')
      t.true('precache' in fly.plugins, 'attach `precache` plugin to instance')
    }
  })
  fly.start('foo')
})

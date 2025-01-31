import type * as Subject from './primitives'
import * as subject from './primitives'

namespace TypeTests {
  type test1 = Expect<
    Equal<Subject.Join<['some', 'nice', 'string'], ' '>, 'some nice string'>
  >
  type test2 = Expect<
    Equal<Subject.Replace<'some nice string', ' ', '-'>, 'some-nice string'>
  >
  type test3 = Expect<
    Equal<Subject.ReplaceAll<'some nice string', ' ', '-'>, 'some-nice-string'>
  >
  type test4 = Expect<
    Equal<Subject.TrimStart<' some nice string '>, 'some nice string '>
  >
  type test5 = Expect<
    Equal<Subject.TrimEnd<' some nice string '>, ' some nice string'>
  >
  type test6 = Expect<
    Equal<Subject.Trim<' some nice string '>, 'some nice string'>
  >
  type test7 = Expect<
    Equal<Subject.Split<'some nice string', ' '>, ['some', 'nice', 'string']>
  >
}

describe('primitives', () => {
  describe('join', () => {
    test('should join words in both type level and runtime level', () => {
      const data: ['a', 'b', 'c'] = ['a', 'b', 'c']
      const result = subject.join(data, '-')
      expect(result).toEqual('a-b-c')
      type test = Expect<Equal<typeof result, 'a-b-c'>>
    })

    test('should join only at runtime level when type is wide', () => {
      const data = ['a', 'b', 'c']
      const result = subject.join(data, '-')
      expect(result).toEqual('a-b-c')
      type test = Expect<Equal<typeof result, string>>
    })
  })

  test('replace', () => {
    test('should replace chars in a string at both type level and runtime level once', () => {
      const data = 'some nice string'
      const result = subject.replace(data, ' ')
      expect(result).toEqual('somenice string')
      type test = Expect<Equal<typeof result, 'somenice string'>>
    })
  })

  test('replaceAll', () => {
    test('should replace all chars in a string at both type level and runtime level once', () => {
      const data = 'some nice string'
      const result = subject.replaceAll(data, ' ')
      expect(result).toEqual('somenicestring')
      type test = Expect<Equal<typeof result, 'somenicestring'>>
    })
  })

  test('split', () => {
    test('should split a string by a delimiter into an array of substrings', () => {
      const data = 'some nice string'
      const result = subject.split(data, ' ')
      expect(result).toEqual(['some', 'nice', 'string'])
      type test = Expect<Equal<typeof result, ['some', 'nice', 'string']>>
    })
  })

  test('trimStart', () => {
    test('should trim the start of a string at both type level and runtime level', () => {
      const data = ' some nice string '
      const result = subject.trimStart(data)
      expect(result).toEqual('some nice string ')
      type test = Expect<Equal<typeof result, 'some nice string '>>
    })
  })

  test('trimEnd', () => {
    test('should trim the end of a string at both type level and runtime level', () => {
      const data = ' some nice string '
      const result = subject.trimEnd(data)
      expect(result).toEqual(' some nice string')
      type test = Expect<Equal<typeof result, ' some nice string'>>
    })
  })

  test('trim', () => {
    test('should trim a string at both type level and runtime level', () => {
      const data = ' some nice string '
      const result = subject.trim(data)
      expect(result).toEqual('some nice string')
      type test = Expect<Equal<typeof result, 'some nice string'>>
    })
  })
})

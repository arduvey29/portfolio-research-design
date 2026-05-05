import { briefs, competitionEntries, researchPapers, stackGroups } from '@/lib/data'

describe('briefs', () => {
  test('has exactly 6 entries', () => {
    expect(briefs).toHaveLength(6)
  })

  test('each brief has all required fields', () => {
    briefs.forEach((brief, i) => {
      expect(brief.id, `brief ${i} missing id`).toBeTruthy()
      expect(brief.domain, `brief ${i} missing domain`).toBeTruthy()
      expect(brief.subject, `brief ${i} missing subject`).toBeTruthy()
      expect(brief.assessment, `brief ${i} missing assessment`).toBeTruthy()
      expect(brief.impact, `brief ${i} missing impact`).toBeDefined()
      expect(brief.systems, `brief ${i} missing systems`).toBeInstanceOf(Array)
      expect(brief.systems.length, `brief ${i} has empty systems`).toBeGreaterThan(0)
      expect(brief.source, `brief ${i} missing source`).toBeDefined()
    })
  })

  test('ids are 01 through 06', () => {
    const ids = briefs.map(b => b.id)
    expect(ids).toEqual(['01', '02', '03', '04', '05', '06'])
  })
})

describe('competitionEntries', () => {
  test('has entries with required fields', () => {
    expect(competitionEntries.length).toBeGreaterThan(0)
    competitionEntries.forEach(entry => {
      expect(entry.placement).toBeTruthy()
      expect(entry.event).toBeTruthy()
      expect(entry.institution).toBeTruthy()
      expect(typeof entry.isPodium).toBe('boolean')
    })
  })
})

describe('stackGroups', () => {
  test('has exactly 4 groups', () => {
    expect(stackGroups).toHaveLength(4)
  })
})

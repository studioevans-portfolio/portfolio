# Run HTML Validator & Lighthouse for deeper automated findings

**Description**

Automated tooling (W3C HTML validator and Chrome Lighthouse) can surface additional issues across accessibility, performance, SEO, and best practices.

**Location**

- Repository root (run locally or via CI)

**Suggested steps**

1. Run the W3C HTML validator against `index.html` (or use the online validator):
```
# Example using vnu.jar (local validator)
java -jar vnu.jar --errors-only index.html
```

2. Run Lighthouse from Chrome DevTools or CLI:
```
# from CLI
lighthouse https://studioevans.co.uk --output html --output-path ./lighthouse-report.html --emulated-form-factor=desktop
```

3. Create issues for high-impact Lighthouse findings (perf, accessibility, SEO) and fix incrementally.

**Priority**: Low

**Labels**: tooling, enhancement

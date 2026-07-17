# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.3.16] - 2025-09-12

### Fixed

- **Infos** Fix badge font

---

## [0.3.13] - 2025-09-07

### Fixed

- Fix font name for iOS and add activeInversed color in fill

---

## [0.3.12] - 2025-09-05

### Fixed

- **TextField** Fix border width bug

---

## [0.3.11] - 2025-08-29

### Changed

- Utils: update default design dimensions for `normalize` to 390x844 (was 375x812)
- Themes: refactor `spacing`, `gap`, and `radius` tokens into phone/tablet variants and add stricter typings

---

## [0.3.10] - 2025-08-27

### Fixed

- **TextField** Add `showErrorMessage` prop

---

## [0.3.9] - 2025-08-27

### Fixed

- Change font weight of caption to medium

---

## [0.3.8] - 2025-08-27

### Fixed

- **ListItem** Adjusted border to ensure consistent item height when item is selected

---

## [0.3.7] - 2025-08-26

### Fixed

- **ProgressBar** Fix component not rendering when `animated` is false

---

## [0.3.6] - 2025-08-25

### Fixed

- **ListItem** Adjusted title line height to ensure consistent item height when no right icon is present

---

## [0.3.5] - 2025-08-23

### Changed

- **ProgressBar** Update track color
- **Typography** Update typography.caption font weight

### Fixed

- **PlanningDate** Use typography.caption for its text

---

## [0.3.4] - 2025-08-22

### Added

- **ListItem** Handle controlled and uncontrolled Check component

---

## [0.3.3] - 2025-08-22

### Added

- **ListItem** Allow to not show anything for the rightIcon

---

## [0.3.2] - 2025-08-20

### Added

- **ListItem** component now allows passing a custom `rightIcon` element or image and an optional `showAlertDot` badge indicator, as well as spreading all React-Native `PressableProps` for improved accessibility. _(PRFT-5563, commit `43fc69a`)_

- Enable passing Pressable props to components primarily based on Pressable

---

## [0.3.1] - 2025-08-20

### Changed

- **PlanningDate** component: renamed internal variants to follow design-system naming conventions. _(PRFT-5559, pull request #6, commit `e8a0a43`)_

---

## [0.3.0] - 2024-xx-xx

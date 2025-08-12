# 🤝 Contributing to Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Reporting Issues](#reporting-issues)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 How Can I Contribute?

### Reporting Bugs

- Use the GitHub issue tracker
- Include detailed steps to reproduce
- Provide system information (OS, browser, etc.)
- Include screenshots if applicable

### Suggesting Enhancements

- Describe the enhancement clearly
- Explain why this enhancement would be useful
- Include mockups or examples if possible

### Code Contributions

- Fix bugs
- Add new features
- Improve documentation
- Optimize performance
- Add tests

## 🛠️ Development Setup

### Prerequisites

- Node.js 18.0+
- npm 8.0+ or yarn 1.22+
- Git

### Setup Steps

1. **Fork the repository**

   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**

   - Follow the code style guidelines
   - Write tests for new functionality
   - Update documentation as needed

5. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   npm run dev  # Test locally
   ```

## 🔄 Pull Request Process

### Before Submitting

1. **Ensure your code follows the style guidelines**
2. **Run all tests and checks**
3. **Update documentation if needed**
4. **Commit with clear, descriptive messages**

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```
feat(contact): add email validation
fix(navigation): resolve mobile menu issue
docs(readme): update installation instructions
```

### Pull Request Guidelines

1. **Title**: Clear, descriptive title
2. **Description**: Explain what and why, not how
3. **Related Issues**: Link to relevant issues
4. **Screenshots**: Include for UI changes
5. **Testing**: Describe how you tested

## 📝 Code Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### React Components

- Use functional components with hooks
- Follow the existing component structure
- Use proper TypeScript interfaces
- Implement proper error boundaries

### CSS/Styling

- Follow the existing CSS architecture
- Use CSS variables for theming
- Ensure responsive design
- Follow BEM methodology

## 🧪 Testing Guidelines

### Unit Tests

- Write tests for new components
- Ensure good test coverage
- Use descriptive test names
- Mock external dependencies

### Integration Tests

- Test component interactions
- Verify API integrations
- Test user workflows

### Manual Testing

- Test on multiple browsers
- Verify mobile responsiveness
- Check accessibility features
- Test performance impact

## 🐛 Reporting Issues

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**

- OS: [e.g. Windows 10, macOS 12]
- Browser: [e.g. Chrome 96, Safari 15]
- Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions.

**Additional context**
Add any other context or screenshots about the feature request here.
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

## 🎯 Getting Help

If you need help with contributing:

1. **Check existing issues** for similar problems
2. **Search documentation** for solutions
3. **Ask in discussions** or create a new one
4. **Contact maintainers** if needed

## 🙏 Recognition

Contributors will be recognized in:

- Project README
- Release notes
- Contributor hall of fame

---

Thank you for contributing to this project! 🎉

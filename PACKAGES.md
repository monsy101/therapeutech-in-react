# Package Documentation 📦

This document provides detailed information about all packages used in the Therapa Web project, including their purposes, versions, and usage examples.

## 📋 Package Overview

### Total Dependencies: 13
- **Production Dependencies**: 5 packages
- **Development Dependencies**: 8 packages

---

## 🚀 Production Dependencies

### Core Framework

#### `next` (v15.5.2)
**Purpose**: React framework for production
- **What it does**: Provides SSR, routing, optimization, and developer experience
- **Why we use it**: Modern React framework with excellent performance and developer tools
- **Usage**: Powers the entire application structure and routing
- **Key features**: App Router, Turbopack, Image optimization, API routes
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)

#### `react` (v19.1.0)
**Purpose**: Core React library
- **What it does**: JavaScript library for building user interfaces
- **Why we use it**: Industry standard for component-based UI development
- **Usage**: All UI components and state management
- **Key features**: Components, hooks, virtual DOM, concurrent features
- **Documentation**: [React Docs](https://react.dev/)

#### `react-dom` (v19.1.0)
**Purpose**: React DOM rendering
- **What it does**: Provides DOM-specific methods for React
- **Why we use it**: Required for rendering React components to the DOM
- **Usage**: Client-side rendering and hydration
- **Key features**: DOM manipulation, event handling, hydration
- **Documentation**: [React DOM Docs](https://react.dev/reference/react-dom)

### UI & Styling

#### `lucide-react` (v0.263.1)
**Purpose**: Icon library
- **What it does**: Provides beautiful, customizable SVG icons
- **Why we use it**: Consistent, accessible icons throughout the application
- **Usage**: Navigation icons, action buttons, status indicators
- **Key features**: 1000+ icons, customizable size/color, tree-shakeable
- **Examples**:
  ```tsx
  import { Heart, Calendar, MessageCircle } from 'lucide-react';
  
  <Heart size={24} className="text-green-500" />
  <Calendar size={20} />
  <MessageCircle size={16} />
  ```
- **Documentation**: [Lucide Docs](https://lucide.dev/)

#### `clsx` (v2.1.1)
**Purpose**: Conditional className utility
- **What it does**: Constructs className strings conditionally
- **Why we use it**: Clean, readable conditional styling
- **Usage**: Dynamic CSS classes based on state
- **Key features**: Lightweight, TypeScript support, conditional classes
- **Examples**:
  ```tsx
  import clsx from 'clsx';
  
  const buttonClass = clsx(
    'px-4 py-2 rounded-lg',
    isActive ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700',
    isDisabled && 'opacity-50 cursor-not-allowed'
  );
  ```
- **Documentation**: [clsx GitHub](https://github.com/lukeed/clsx)

---

## 🛠️ Development Dependencies

### TypeScript Support

#### `typescript` (v5)
**Purpose**: Static type checking
- **What it does**: Adds static type checking to JavaScript
- **Why we use it**: Catch errors at compile time, better IDE support
- **Usage**: All `.ts` and `.tsx` files
- **Key features**: Type safety, interfaces, generics, strict mode
- **Configuration**: `tsconfig.json`
- **Documentation**: [TypeScript Docs](https://www.typescriptlang.org/docs/)

#### `@types/node` (v20)
**Purpose**: Node.js type definitions
- **What it does**: Provides TypeScript types for Node.js APIs
- **Why we use it**: Type safety for Node.js specific code
- **Usage**: Server-side code, file system operations
- **Key features**: Process, fs, path, url types
- **Documentation**: [@types/node](https://www.npmjs.com/package/@types/node)

#### `@types/react` (v19)
**Purpose**: React type definitions
- **What it does**: Provides TypeScript types for React
- **Why we use it**: Type safety for React components and hooks
- **Usage**: All React components and hooks
- **Key features**: Component props, hooks, event handlers
- **Documentation**: [@types/react](https://www.npmjs.com/package/@types/react)

#### `@types/react-dom` (v19)
**Purpose**: React DOM type definitions
- **What it does**: Provides TypeScript types for React DOM
- **Why we use it**: Type safety for DOM manipulation
- **Usage**: Client-side rendering, DOM events
- **Key features**: DOM methods, event types, ref types
- **Documentation**: [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)

### Styling & CSS

#### `tailwindcss` (v4)
**Purpose**: Utility-first CSS framework
- **What it does**: Provides utility classes for rapid UI development
- **Why we use it**: Fast, consistent styling with design system
- **Usage**: All component styling
- **Key features**: Responsive design, dark mode, custom colors
- **Configuration**: `tailwind.config.js`
- **Examples**:
  ```tsx
  <div className="bg-[#91EEA5] text-[#14181B] px-4 py-2 rounded-lg hover:bg-[#7DD3A0] transition-colors">
    Button
  </div>
  ```
- **Documentation**: [Tailwind CSS Docs](https://tailwindcss.com/docs)

#### `@tailwindcss/postcss` (v4)
**Purpose**: PostCSS plugin for Tailwind
- **What it does**: Processes Tailwind CSS with PostCSS
- **Why we use it**: Required for Tailwind CSS compilation
- **Usage**: CSS processing pipeline
- **Key features**: CSS transformation, purging, optimization
- **Documentation**: [Tailwind PostCSS](https://tailwindcss.com/docs/using-with-preprocessors)

### Code Quality

#### `eslint` (v9)
**Purpose**: JavaScript/TypeScript linter
- **What it does**: Finds and fixes code quality issues
- **Why we use it**: Maintain code quality and consistency
- **Usage**: All `.js`, `.ts`, `.tsx` files
- **Key features**: Custom rules, auto-fixing, IDE integration
- **Configuration**: `eslint.config.mjs`
- **Documentation**: [ESLint Docs](https://eslint.org/docs/)

#### `eslint-config-next` (v15.5.2)
**Purpose**: ESLint configuration for Next.js
- **What it does**: Provides Next.js specific linting rules
- **Why we use it**: Enforces Next.js best practices
- **Usage**: Extends base ESLint configuration
- **Key features**: Next.js rules, React rules, accessibility rules
- **Documentation**: [Next.js ESLint](https://nextjs.org/docs/app/building-your-application/configuring/eslint)

#### `@eslint/eslintrc` (v3)
**Purpose**: ESLint configuration utilities
- **What it does**: Provides utilities for ESLint configuration
- **Why we use it**: Required for ESLint configuration system
- **Usage**: Configuration file processing
- **Key features**: Config resolution, rule loading
- **Documentation**: [ESLint Config](https://eslint.org/docs/latest/use/configure/)

---

## 📊 Package Size Analysis

### Bundle Impact (Estimated)
- **Next.js**: ~200KB (framework)
- **React**: ~45KB (core library)
- **React DOM**: ~130KB (DOM rendering)
- **Lucide React**: ~50KB (icons, tree-shakeable)
- **clsx**: ~1KB (utility)

### Development Dependencies
- **TypeScript**: ~15MB (development only)
- **ESLint**: ~50MB (development only)
- **Tailwind CSS**: ~10MB (development only)

---

## 🔄 Package Updates

### Update Strategy
1. **Major Updates**: Test thoroughly, check breaking changes
2. **Minor Updates**: Usually safe, test key features
3. **Patch Updates**: Generally safe, update regularly

### Update Commands
```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm install package@latest

# Update with breaking changes
npm install package@latest --force
```

### Recommended Update Schedule
- **Weekly**: Patch updates
- **Monthly**: Minor updates
- **Quarterly**: Major updates (with testing)

---

## 🚨 Security Considerations

### Regular Security Audits
```bash
# Run security audit
npm audit

# Fix vulnerabilities
npm audit fix

# Force fix (use with caution)
npm audit fix --force
```

### Package Trust
- All packages are from official sources
- Regular security updates maintained
- No packages with known vulnerabilities

---

## 📝 Maintenance Notes

### Keeping Documentation Updated
- Update this file when adding/removing packages
- Document new package purposes and usage
- Keep version numbers current
- Note any breaking changes or migration steps

### Package Review Process
1. **Evaluate Need**: Is the package necessary?
2. **Check Alternatives**: Are there lighter alternatives?
3. **Review Dependencies**: What does it bring in?
4. **Test Integration**: Does it work well with existing code?
5. **Document Usage**: Add to this file

---

*Last Updated: January 2025*
*Total Packages: 13*
*Last Audit: [Run `npm audit` to check]*

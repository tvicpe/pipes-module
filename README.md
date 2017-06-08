pipes-module
=====
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Pipes list](#list)
5. [Git repository](#git)
6. [Version](#version)

### <a name="description"></a>1. Description
angular2+ module which exposes a list of pipes. 
  
  
### <a name="installation"></a>2. Installation
Install the module into your application and save it as a 
dependency in your `package.json` file  
```
npm install pipes-module --save
```
  
  
### <a name="usage"></a>3. Usage
```typescript
import { PipesModule } from 'pipes-module';

@NgModule({
  //...
  imports: [
	//...
	PipesModule // <<--- HERE
  ],
  //...
})
```
  
..and use the pipes in your application.
  
  
### <a name="list"></a>4. Pipes list
- [trust-html-pipe](https://github.com/tvicpe/trust-html-pipe)  
- [nl2br-pipe](https://github.com/tvicpe/nl2br-pipe)
  
### <a name="git"></a>5. Git repository
[https://github.com/tvicpe/pipes-module](https://github.com/tvicpe/pipes-module)
  
  
### <a name="version"></a>6. Version
0.0.6

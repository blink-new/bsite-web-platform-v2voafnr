import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Github, Linkedin, Mail, ExternalLink, ArrowUp, Eye, Heart, Star, Sparkles } from 'lucide-react'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const skills = [
    'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', '3ds Max', 'Logo Design', 
    'Poster Design', 'Typography', 'Adobe After Effects', 'Canva', 'Lightroom'
  ]

  const projects = [
    {
      title: 'Twin Hearts Entertainment Branding',
      description: 'Complete brand identity design for Twin Hearts Entertainment including logo design, brand guidelines, and marketing materials. Created cohesive visual identity that reflects the company\'s creative vision.',
      tech: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Strategy', 'Logo Design'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media Campaign - Yatra Arts',
      description: 'Comprehensive social media creative campaign for Yatra Arts & Media featuring poster designs, Instagram stories, and promotional graphics that increased engagement by 40%.',
      tech: ['Adobe Photoshop', 'Canva', 'Social Media Design', 'Typography'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Short Film Poster Series',
      description: 'Creative poster designs for independent short films, focusing on visual storytelling and mood creation. Each poster captures the essence of the film through compelling visual narratives.',
      tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Print Design', 'Visual Storytelling'],
      github: '#',
      demo: '#'
    }
  ]

  const galleryItems = [
    {
      id: 1,
      title: 'South Indian Food Poster - Artist Cafe',
      category: 'Poster Design',
      image: '/food-poster.jpg',
      description: 'Vibrant food poster design for Artist Cafe featuring traditional South Indian cuisine with modern typography and appetizing visuals.'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              Portfolio
            </h1>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for freelance</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient">
              Rahul Krishna
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Graphic Designer & Visual Communication student crafting compelling visuals that tell stories and communicate ideas effectively.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('gallery')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Gallery
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm Rahul Krishna, a passionate Graphic Designer and Visual Communication student with a strong foundation in creative design, branding, and visual storytelling. I specialize in crafting compelling visuals that communicate ideas effectively across digital and print media.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I've gained valuable industry exposure through internships at Twin Hearts Entertainment in Chennai and Yatra Arts & Media in Auroville. These experiences have shaped my approach to design, enhancing my skills in branding, poster design, social media creatives, and short film production.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Eye className="w-8 h-8 text-accent" />
                Creative Gallery
                <Star className="w-6 h-6 text-accent animate-spin" />
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of my creative work spanning poster design, branding, social media graphics, and visual storytelling.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <Button size="sm" variant="secondary" className="w-full bg-background/90 backdrop-blur-sm hover:bg-background">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Star className="w-8 h-8 text-accent animate-pulse" />
                Featured Work
                <Sparkles className="w-6 h-6 text-accent animate-bounce" />
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional projects and collaborations that showcase my design expertise and creative problem-solving skills.
              </p>
            </div>
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always interested in new creative opportunities and exciting design projects. 
              Let's discuss how we can bring your visual ideas to life.
            </p>
            <div className="flex justify-center gap-6">
              <Button size="lg" asChild>
                <a href="mailto:rahul@example.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://linkedin.com/in/rahulkrishna" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/rahulkrishna" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Rahul Krishna. Designed with passion & creativity.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-lg z-50"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}

export default App
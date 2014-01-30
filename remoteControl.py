import web, os, sys

render = web.template.render('templates/')

urls = (
    '/control/(.*)', 'control',
    '/', 'index'
)

########################################

class index:
    def GET(self):
      return render.index()

class control:
    def GET(self, button):
      os.system('xvkbd -text "\%s"' % button)
      return render.index()

		
if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()

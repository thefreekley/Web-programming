
from django.shortcuts import render,redirect
from .models import Printer
from .forms import PrinterForm
from django.views.generic import UpdateView,DeleteView

def view_page(request):
    printer=Printer.objects.order_by('-price')
    return render(request,'main\View Page.html', {'printer':printer})


class PrinterUpdateView(UpdateView):
    model = Printer
    template_name = 'main\Edit Page.html'
    form_class = PrinterForm

class PrinterDeleteView(DeleteView):
    model = Printer
    success_url = '/'
    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


def create_page(request):
    error= False
    if request.method == 'POST':
        form = PrinterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('view')
        else:
            error=True

    form = PrinterForm()
    date = {
        'form':form,
        'error':error
    }
    return render(request,'main\Create Page.html',date)


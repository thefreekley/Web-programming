from .models import Printer
from django.forms import ModelForm,TextInput,Textarea

class PrinterForm(ModelForm):
    class Meta:
        model = Printer
        fields = ['title','description','speed','price','date']
        widgets = {
            "title":TextInput(attrs={
                 'class': 'form__area_title-input',
                'placeholder' : 'Text...'
            }),
            "description": Textarea(attrs={
                'class':'form__area_input-description'
            }),
            "price": TextInput(attrs={
                'type': 'number',
                'class': 'form__control',
                'min':'0',
                'value':'1'
            }),
            "speed": TextInput(attrs={
                'type': 'number',
                'class': 'form__control',
                'min': '0',
                'value': '1'
            }),
            "date": TextInput(attrs={
                'class':'form__control',
                'type':"date"
            })

        }
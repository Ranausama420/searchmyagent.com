from django.shortcuts import render
import json
from .models import sellerInfo, buyerInfo, namephoneInfo
from django.core.mail import send_mail
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse

# Create your views here.

def index(request):
    return render(request, 'agentFinder/index.html')

def selling(request):

    return render(request, 'agentFinder/forms.html')

def buying(request):

    return render(request, 'agentFinder/buying.html')

def selling_forms_save(request):
    print("hello")
    print(request.method)

    addr = request.POST.get('address')
    pt = request.POST.get('properType')
    ts = request.POST.get('tgSale')
    st = request.POST.get('soonTime')
    fn = request.POST.get('fname')
    fe = request.POST.get("email")
    fm = request.POST.get("phone")
    try:
        databaseobj = sellerInfo(address=addr, propertType=pt, targetSale=ts,SoonTime=st,
                                name=fn, phone=fm, email=fe)
        databaseobj.save()

    except Exception as e:
        print(str(e))

    data={"Address": addr,
          "Prperty_type": pt,
          "Target_sale": ts,
          "Time":st,
          "Nmae": fn,
          "Email": fe,
          "Number": fm
          }
    msg=json.dumps(data,indent=8)
    print(msg.strip(' {}"", '))
    # send_mail(
    #     "Seller Info",
    #     msg.strip(' {}"", '),
    #     "usamarana845@gmail.com",
    #     ["ranausama12@hotmail.com"],
    #
    # )
    name=fn.split(" ")
    print(name[0])
    context={
        "Name": name[0],
    }
    return render(request, 'agentFinder/forms.html',context)


def buying_forms_save(request):
    print("hello")
    print(request.method)

    addr = request.POST.get('address')
    pt = request.POST.get('properType')
    ts = request.POST.get('tgSale')
    st = request.POST.get('soonTime')
    fn = request.POST.get('fname')
    fe = request.POST.get("email")
    fm = request.POST.get("phone")
    try:
        databaseobj = buyerInfo(address=addr, propertType=pt, targetSale=ts,SoonTime=st,
                                name=fn, phone=fm, email=fe)
        databaseobj.save()

    except Exception as e:
        print(str(e))

    data = {"Address": addr,
            "Prperty_type": pt,
            "Target_sale": ts,
            "Time": st,
            "Nmae": fn,
            "Email": fe,
            "Number": fm
            }
    msg = json.dumps(data, indent=8)
    print(msg.strip(' {}"", '))
    print("buyer")
    # send_mail(
    #     "Seller Info",
    #     msg.strip(' {}"", '),
    #     "usamarana845@gmail.com",
    #     ["ranausama12@hotmail.com"],
    #
    # )
    name = fn.split(" ")
    context = {
        "Name": name[0],
    }
    return render(request, 'agentFinder/buying.html',context)


def namephoneinfo_save(request):
    print(request.method)
    fn = request.POST.get('name')
    fm = request.POST.get('number')
    try:
        databaseobj = namephoneInfo(name=fn, phone=fm)
        databaseobj.save()

    except Exception as e:
        print(str(e))
    data = {
            "Nmae": fn,
            "Number": fm
            }
    msg = json.dumps(data, indent=3)
    print(msg.strip(' {}"", '))
    # name = fn.split(" ")
    return render(request, 'agentFinder/index.html')
clear-host
Add-Type -AssemblyName System.Xml.Linq


$companies =  @(
("hcl", "hcl001ERS"),
("ebay", "ebay"),
("hp", "10109419"),
("deloite", "10106525") )

# Create HTML file Object
$HTML = New-Object -Com "HTMLFile"

$excel = New-Object -ComObject Excel.Application
$excel.Visible = $true
$file = "C:\Users\sanja\Google Drive\Job\Resume\Dev\JSearch.xlsx"
#$workbook = $excel.Workbooks.Add()
$Workbook=$excel.Workbooks.Open($file)
$sheet =  $Workbook.Worksheets.Item("jobs")
$counter = $sheet.UsedRange.rows.count + 1
write-host $counter 'in excel'

if($counter -eq 2)
{
$counter++
$sheet.cells.Item($counter,1) = "Date"
$sheet.cells.Item($counter,2) = "title"
$sheet.cells.Item($counter,3) = "link"
$sheet.cells.Item($counter,4) = "city"
$sheet.cells.Item($counter,5) = "state"
$sheet.cells.Item($counter,6) = "age"
}



for($j = 0; $j -lt $companies.Length; $j++)
{
$companyID = $companies[$j][1]
Write-host  $companies[$j][0]
$url = "https://www.dice.com/company/pagination?inputJSON=%7B%22startPage%22%3A1%2C%22companyId%22%3A%22"+$companyID+"%22%7D"
&{ Clear-Variable R } 
$R = (irm $url) 
$total = $R.total
$totalPages = $R.pageCount
$currePage = $R.page
$divCollect = $R.searchResults

for($i = 2; $i -lt $totalPages; $i++){
  $url = "https://www.dice.com/company/pagination?inputJSON=%7B%22startPage%22%3A"+(30 * ($i -1))+"%2C%22companyId%22%3A%22"+$companyID+"%22%7D"
  &{ Clear-Variable R } 
  $R = (irm $url) 
  $currePage = $R.page
  if($currePage-eq $i)
  {
    #$divCollect = $divCollect + $R.searchResults
    $divCollect = $divCollect + $R.searchResults

    # Write HTML content according to DOM Level2 
    $HTML.IHTMLDocument2_write($divCollect)

    for($z = 0; $z -lt $HTML.all.tags("div").length; $z++){

    if($HTML.all.tags("div")[$z].className -eq "company-content")
    {
        $counter++
        $a = Get-Date
        $sheet.cells.Item($counter,1) = $a.ToShortDateString()
        #$HTML.all.tags("div")[$i].all.tags("H3")[0].all.tags("a")[0].id
        $sheet.cells.Item($counter,2) = $HTML.all.tags("div")[$z].all.tags("H3")[0].all.tags("a")[0].innerText
        $sheet.cells.Item($counter,3) = "https://www.dice.com"+ $HTML.all.tags("div")[$z].all.tags("H3")[0].all.tags("a")[0].pathname
        $sheet.cells.Item($counter,4) = $HTML.all.tags("div")[$z].all.tags("UL")[0].all.tags("LI")[0].innerText.Split(',')[0]
        $sheet.cells.Item($counter,5) = $HTML.all.tags("div")[$z].all.tags("UL")[0].all.tags("LI")[0].innerText.Split(',')[1]
        $sheet.cells.Item($counter,6) = $HTML.all.tags("div")[$z].all.tags("UL")[0].all.tags("LI")[1].innerText
    }
    }

    Write-host 'Processing page' $R.page 'of' $R.pageCount 'resultsize ' $divCollect.Length '@' $url
  }
  
}




}

 
